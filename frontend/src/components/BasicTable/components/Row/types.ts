import { ITableHeader } from '../../types';
import { IndexedHeader, OrganizedItem } from '../../utils/organizeData';

export type RowProps = {
  i: number;
  headers: ITableHeader[];
  enableActions?: boolean;
  canChangeStatus?: boolean;

  onChangeStatus?: (item: any) => void;

  indexedHeader: IndexedHeader;
  row: OrganizedItem;
};
