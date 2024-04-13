import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  user_name: string;

  @ApiProperty()
  user_surname: string;

  @ApiProperty({ example: 'example@example.com' })
  user_email: string;

  @ApiProperty()
  user_password: string;

  @ApiProperty()
  profile_id: number;
}
