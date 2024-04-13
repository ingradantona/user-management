import { ApiProperty } from '@nestjs/swagger';

export class FilterPagination {
  @ApiProperty({ required: false, default: 1 })
  page: number;

  @ApiProperty({ required: false, default: 10 })
  limit: number;

  route: string;
}
