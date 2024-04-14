export interface ITableHeader {
  key: string;
  value: string;
  leftHeader?: boolean;
  leftBody?: boolean;
  columnWidth?: string;
  tab?: boolean;
}

export type BasicTableProps = {
  id?: string;
  headers: ITableHeader[];
  data: any[];
  loading?: boolean;
  emptyMessage?: string;
  enableActions?: boolean;
  canChangeStatus?: boolean;
  onChangeStatus?: (item: any) => void;
};
