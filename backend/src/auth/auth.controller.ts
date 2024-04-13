import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './shared/auth.service';
import { PublicRoute } from 'src/shared/public_route.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @PublicRoute()
  async auth(@Body() auth: LoginDTO) {
    return this.authService.login(auth);
  }
}
