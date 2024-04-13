import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty({ example: 'example@example.com' })
  user_email: string;

  @ApiProperty()
  user_password: string;
}
