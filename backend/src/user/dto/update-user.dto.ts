import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  user_name: string;

  @ApiProperty()
  user_surname: string;

  @ApiProperty()
  user_email: string;
}
