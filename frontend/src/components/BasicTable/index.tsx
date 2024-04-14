import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import { BasicTableProps } from './types';
import { organizeData } from './utils/organizeData';
import { CircularProgressStyled, Empty, Progress, Wrapper } from './styles';
import { Row } from './components/Row';
import TableHeader from './components/Header';

export default function BasicTable({
  id,
  data,
  headers,
  loading,
  emptyMessage,
  enableActions,
  canChangeStatus,
  onChangeStatus,
}: BasicTableProps) {
  const [organizedData, indexedHeader] = organizeData(data, headers);

  if (data?.length === 0 && !loading) {
    return (
      <Wrapper>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableHeader headers={headers} enableActions={enableActions} />
          </TableHead>
        </Table>
        <Empty>{/* <img src={NotFound} /> */}</Empty>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Table sx={{ width: '100%' }} aria-label="simple table" id={id}>
        <TableHead>
          <TableHeader headers={headers} enableActions={enableActions} />
        </TableHead>
        <TableBody>
          {!loading &&
            organizedData?.map((row: any, i: number) => {
              return (
                <Row
                  i={i}
                  headers={headers}
                  indexedHeader={indexedHeader}
                  row={row}
                  enableActions={enableActions}
                  onChangeStatus={onChangeStatus}
                  canChangeStatus={canChangeStatus}
                  key={`row-${i}`}
                />
              );
            })}
        </TableBody>
      </Table>
      {loading && (
        <Progress>
          <CircularProgressStyled />
        </Progress>
      )}
    </Wrapper>
  );
}
