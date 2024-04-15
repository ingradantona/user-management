import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Brackets, Repository } from 'typeorm';
import { Validations } from 'src/shared/validations';
import { ValidType } from 'src/shared/Enums';
import { Utils } from 'src/shared/utils';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';
import { FilterUser } from './dto/filter-user.dto';
import TokenInfo from 'src/auth/interfaces/token-info';
import { Profile } from './entities/profile.entity';
import { FilterChart } from './dto/filter-user-chart';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async findByEmail(email: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile')
      .where('user.user_email = :user_email', { user_email: email })
      .getOne();
  }

  private async findProfileById(id: number) {
    return this.profileRepository.findOneBy({ profile_id: id });
  }

  async findAllProfiles() {
    return this.profileRepository
      .createQueryBuilder('profile')
      .orderBy('profile_name', 'ASC')
      .getMany();
  }

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const { user_name, user_surname, user_email, user_password, profile_id } = createUserDto;

    if (user_name.trim() == '' || user_name == undefined) {
      throw new BadRequestException(`O campo 'nome' não pode estar vazio.`);
    }
    if (user_surname.trim() == '' || user_surname == undefined) {
      throw new BadRequestException(`O campo 'sobrenome' não pode estar vazio.`);
    }
    if (user_email.trim() == '' || user_email == undefined) {
      throw new BadRequestException(`O campo 'e-mail' não pode estar vazio.`);
    }
    if (user_password.trim() == '' || user_password == undefined) {
      throw new BadRequestException(`O campo 'senha' não pode estar vazio.`);
    }
    if (!profile_id) {
      throw new BadRequestException(`O campo 'perfil' não pode estar vazio.`);
    }

    const user = this.userRepository.create(createUserDto);

    Validations.getInstance().validateWithRegex(
      user.user_email,
      ValidType.IS_EMAIL,
      ValidType.NO_SPACE,
    );

    const emailIsRegistered = await this.findByEmail(user.user_email);

    if (emailIsRegistered) {
      throw new BadRequestException(`Este e-mail já foi cadastrado.`);
    }

    const profile = await this.findProfileById(profile_id);

    if (!profile) {
      throw new BadRequestException(`Este perfil não é válido`);
    }

    user.user_name = user_name.toUpperCase().trim();

    Validations.getInstance().validateWithRegex(
      user.user_name,
      'nome',
      ValidType.NO_MANY_SPACE,
      ValidType.NO_SPECIAL_CHARACTER,
      ValidType.IS_STRING,
    );

    Validations.getInstance().verifyLength(user.user_name, 'nome', 3, 40);

    user.user_surname = user_surname.toUpperCase().trim();

    Validations.getInstance().validateWithRegex(
      user.user_surname,
      'sobrenome',
      ValidType.NO_MANY_SPACE,
      ValidType.NO_SPECIAL_CHARACTER,
      ValidType.IS_STRING,
    );

    Validations.getInstance().verifyLength(user.user_surname, 'sobrenome', 3, 40);

    Validations.getInstance().validateWithRegex(
      user.user_password,
      'senha',
      ValidType.NO_SPACE,
      ValidType.MINIMUM_ONE_NUMBER_STRING_SPECIAL_CHARACTER,
    );

    Validations.getInstance().verifyLength(user.user_password, 'senha', 4, 40);

    user.user_password = await Utils.getInstance().hash(user_password);

    user.user_status = true;

    await this.userRepository.save(user);

    return await this.findOne(user.user_id);
  }

  async findAll(filter: FilterUser): Promise<Pagination<UserResponseDto>> {
    const { search, user_status } = filter;

    const userBuilder = this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.user_id',
        'user.user_name',
        'user.user_surname',
        'user.user_email',
        'user.user_status',
      ])
      .leftJoinAndSelect('user.profile', 'profile')
      .orderBy('user.user_name', 'ASC');

    if (search) {
      userBuilder.andWhere(
        new Brackets((queryBuilderOne) => {
          queryBuilderOne
            .where('user.user_name ILIKE :user_name', {
              user_name: `%${search}%`,
            })
            .orWhere('user.user_surname ILIKE :user_surname', {
              user_surname: `%${search}%`,
            });
        }),
      );
    }

    if (user_status) {
      userBuilder.andWhere('user.user_status = :user_status', { user_status });
    }

    return await paginate<User>(userBuilder, filter);
  }

  async findOne(id: number): Promise<UserResponseDto> {
    Validations.getInstance().validateWithRegex(`${id}`, ValidType.IS_NUMBER);

    return await this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.user_id',
        'user.user_name',
        'user.user_surname',
        'user.user_email',
        'user.user_status',
      ])
      .leftJoinAndSelect('user.profile', 'profile')
      .where('user.user_id = :user_id', { user_id: id })
      .getOne();
  }

  async update(id: number, updateUserDto: UpdateUserDto, userReq: TokenInfo) {
    Validations.getInstance().validateWithRegex(`${id}`, ValidType.IS_NUMBER);

    const { user_id } = userReq;
    const { user_name, user_surname, user_email } = updateUserDto;

    const user = await this.userRepository.preload({
      ...updateUserDto,
      user_id: id,
    });

    if (!user) {
      throw new NotFoundException(`Usuário não econtrado.`);
    }

    if (user_id != user.user_id) {
      throw new BadRequestException(`Edição não autorizada`);
    }

    if (user_email) {
      Validations.getInstance().validateWithRegex(
        user.user_email,
        ValidType.IS_EMAIL,
        ValidType.NO_SPACE,
      );

      const emailIsRegistered = await this.findByEmail(user.user_email);

      if (emailIsRegistered && emailIsRegistered.user_id != id) {
        throw new BadRequestException(`Este e-mail já foi cadastrado.`);
      }
    }

    if (user_name) {
      user.user_name = user_name.toUpperCase().trim();

      Validations.getInstance().validateWithRegex(
        user.user_name,
        'nome',
        ValidType.NO_MANY_SPACE,
        ValidType.NO_SPECIAL_CHARACTER,
        ValidType.IS_STRING,
      );

      Validations.getInstance().verifyLength(user.user_name, 'nome', 3, 40);
    }

    if (user_surname) {
      user.user_surname = user_surname.toUpperCase().trim();

      Validations.getInstance().validateWithRegex(
        user.user_surname,
        'sobrenome',
        ValidType.NO_MANY_SPACE,
        ValidType.NO_SPECIAL_CHARACTER,
        ValidType.IS_STRING,
      );

      Validations.getInstance().verifyLength(user.user_surname, 'sobrenome', 3, 40);
    }

    await this.userRepository.save(user);

    return this.findOne(id);
  }

  async changeStatus(id: number) {
    Validations.getInstance().validateWithRegex(`${id}`, ValidType.IS_NUMBER);

    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException(`Usuário não econtrado.`);
    }

    user.user_status = !user.user_status;

    await this.userRepository.save(user);

    return await this.findOne(id);
  }

  async chart(filter: FilterChart) {
    const { profile_id } = filter;

    const userQueryBuilder = this.userRepository.createQueryBuilder('user');

    if (profile_id) {
      userQueryBuilder.andWhere('user.profile_id = :profile_id', {
        profile_id,
      });
    }

    const users = await userQueryBuilder.getMany();

    const result = users.reduce(
      (acc, curr) => {
        if (curr.user_status) {
          acc.active += 1;
        } else {
          acc.inactive += 1;
        }

        return acc;
      },
      {
        active: 0,
        inactive: 0,
      },
    );

    return result;
  }
}
