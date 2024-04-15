import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDTO } from '../dto/login.dto';
import Tokens from '../interfaces/tokens';
import { Utils } from 'src/shared/utils';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(user: LoginDTO): Promise<LoginResponseDto> {
    const { user_email, user_password } = user;
    const userSaved = await this.userService.findByEmail(user_email);

    if (!userSaved) {
      throw new BadRequestException(`Usuário ou senha incorretos.`);
    }

    const checkPass = await Utils.getInstance().isMatchHash(user_password, userSaved.user_password);

    if (!checkPass) {
      throw new BadRequestException(`Usuário ou senha incorretos.`);
    }

    const { access_token, refresh_token } = await this.getTokens(
      userSaved.user_id,
      userSaved.user_email,
      userSaved.user_name,
      userSaved.user_surname,
      userSaved.profile.profile_name,
    );

    return {
      user_name: userSaved.user_name,
      user_surname: userSaved.user_surname,
      user_email: userSaved.user_email,
      access_token: access_token,
      refresh_token: refresh_token,
    };
  }

  async getTokens(
    user_id: number,
    user_email: string,
    user_name: string,
    user_surname: string,
    profile_name: string,
  ): Promise<Tokens> {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(
        {
          user_id: user_id,
          user_email: user_email,
          user_name: user_name,
          user_surname: user_surname,
          profile_name: profile_name,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: process.env.JWT_EXPIRES_IN,
          algorithm: 'HS256',
        },
      ),
      this.jwtService.signAsync(
        {
          user_email: user_email,
        },
        {
          secret: process.env.JWT_REFRESH_TOKEN_SECRET,
          expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
          algorithm: 'HS256',
        },
      ),
    ]);

    return {
      access_token: access_token,
      refresh_token: refresh_token,
    };
  }
}
