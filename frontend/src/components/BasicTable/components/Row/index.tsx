import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { rowStyles } from './styles';
import { RowProps } from './types';
import { Actions } from '../../styles';
import { BiSolidUserMinus as Deactive, BiSolidUserPlus as Active } from 'react-icons/bi';

export function Row({
  i,
  headers,
  indexedHeader,
  row,
  enableActions,
  onChangeStatus,
  canChangeStatus,
}: RowProps) {
  return (
    <>
      <TableRow key={`${i}-table`} sx={rowStyles()}>
        {Object.keys(row).map((item, index) => {
          if (item === '$original') {
            return null;
          }

          return (
            <TableCell
              key={`${row[item]}-${index}-row`}
              sx={{
                paddingLeft: headers.length === 1 ? '3rem' : '',
                width: indexedHeader[item].columnWidth || '',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
              align={indexedHeader[item].leftBody ? 'left' : 'center'}
            >
              {row[item]}
            </TableCell>
          );
        })}
        {enableActions && (
          <TableCell key={`${i}-row-actions`}>
            <Actions>
              {onChangeStatus && (
                <button
                  disabled={canChangeStatus}
                  onClick={() => {
                    if (onChangeStatus) {
                      onChangeStatus(row.$original);
                    }
                  }}
                  title={row.$original.userStatus ? 'Desativar' : 'Ativar'}
                >
                  {row.$original.userStatus ? <Deactive /> : <Active />}
                </button>
              )}
            </Actions>
          </TableCell>
        )}
      </TableRow>
    </>
  );
}
