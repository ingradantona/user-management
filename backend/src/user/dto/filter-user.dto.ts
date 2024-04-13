import { ApiProperty } from '@nestjs/swagger';
import { FilterPagination } from 'src/shared/filter.pagination';

export class FilterUser extends FilterPagination {
  @ApiProperty({ required: false })
  search: string;

  @ApiProperty({ required: false })
  user_status: boolean;
}
