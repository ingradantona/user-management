import { BadRequestException, Injectable } from '@nestjs/common';
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

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.user_email = :user_email', { user_email: email })
      .getOne();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { user_name, user_surname, user_email, user_password } = createUserDto;

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

    user.user_password = await Utils.getInstance().encryptPassword(user_password);

    user.user_status = true;

    let userSaved = await this.userRepository.save(user);

    userSaved.user_password = user_password;

    return userSaved;
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
      .orderBy('user.user_name', 'ASC');

    if (search) {
      userBuilder.andWhere(
        new Brackets((queryBuilderOne) => {
          queryBuilderOne
            .where('user.user_name LIKE :user_name', {
              user_name: `%${search}%`,
            })
            .orWhere('user.user_surname LIKE :user_surname', {
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

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
