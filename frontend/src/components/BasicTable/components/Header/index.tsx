import { TableCell, TableRow } from '@mui/material';
import { TableHeaderProps } from './types';
import { headerStyle } from './styles';

export default function TableHeader({ headers, enableActions }: TableHeaderProps) {
  return (
    <TableRow sx={headerStyle()}>
      {headers?.map((header, index) => {
        return (
          <TableCell
            key={`${index}-table-header-cell`}
            sx={{
              paddingLeft: headers.length === 1 ? '3rem' : '',
              width: header.columnWidth ? header.columnWidth : '',
            }}
            align={header.leftHeader ? 'left' : 'center'}
          >
            {header.value}
          </TableCell>
        );
      })}

      {enableActions && (
        <TableCell sx={{ width: '100%' }} align="center">
          Ação
        </TableCell>
      )}
    </TableRow>
  );
}
