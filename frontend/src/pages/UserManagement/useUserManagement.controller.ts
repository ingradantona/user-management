import { useState } from 'react';
import { ITableHeader } from '../../components/BasicTable/types';
import { useQuery } from 'react-query';
import { changeUserStatus, getAllUsersService } from '../../services/user.service';
import { IUserFilter, IUserTableRow } from '../../utils/interface/user.interface';

export default function UseUserManagementController() {
  const [searchParam, setSearchParam] = useState<string>('');
  const [pageParam, setPageParam] = useState(1);
  const [statusParam, setStatusParam] = useState(true);
  const [tableData, setTableData] = useState<IUserTableRow[]>([] as IUserTableRow[]);

  const { refetch } = useQuery(
    ['user', searchParam, pageParam, statusParam],
    async () => {
      const params: IUserFilter = {
        page: pageParam,
        search: searchParam,
        user_status: statusParam,
      };
      return await getAllUsersService(params);
    },
    {
      onSuccess: (dataSuccess) => {
        const data = dataSuccess.data.items.map((item) => ({
          userId: item.user_id,
          userName: item.user_name,
          userSurname: item.user_surname,
          userEmail: item.user_email,
          userStatus: item.user_status,
        }));

        setTableData(data);
      },
    },
  );

  const headers: ITableHeader[] = [
    {
      key: 'userName',
      value: 'Nome',
      columnWidth: '35%',
      leftBody: true,
      leftHeader: true,
    },
    {
      key: 'userSurname',
      value: 'Sobrenome',
      columnWidth: '35%',
      leftBody: true,
      leftHeader: true,
    },
    {
      key: 'userEmail',
      value: 'E-mail',
      columnWidth: '35%',
      leftBody: true,
      leftHeader: true,
    },
  ];

  function onSearch(e: string) {
    setSearchParam(e);
    setPageParam(1);
  }

  async function handleChangeStatus(item: IUserTableRow) {
    await changeUserStatus(item.userId);
    refetch;
  }

  return {
    searchParam,
    onSearch,
    statusParam,
    setStatusParam,
    headers,
    tableData,
    handleChangeStatus,
  };
}
