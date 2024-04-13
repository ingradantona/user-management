import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';

export class FilterChart {
  @ApiProperty({ required: false })
  profile_id: number;
}
