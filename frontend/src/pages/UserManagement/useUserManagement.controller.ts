import { useState } from 'react';
import { ITableHeader } from '../../components/BasicTable/types';
import { useQuery } from 'react-query';
import { changeUserStatus, getAllUsersService } from '../../services/user.service';
import { IUserFilter, IUserTableRow } from '../../utils/interface/user.interface';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function UseUserManagementController() {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState<string>('');
  const [pageParam, setPageParam] = useState(1);
  const [totalPageParam, settotalPageParam] = useState(1);
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
          userProfile: item.profile.profile_name,
        }));

        settotalPageParam(dataSuccess.data.meta.totalPages);
        setTableData(data);
      },
    },
  );

  const headers: ITableHeader[] = [
    {
      key: 'userName',
      value: 'Nome',
      columnWidth: '25%',
      leftBody: true,
      leftHeader: true,
    },
    {
      key: 'userSurname',
      value: 'Sobrenome',
      columnWidth: '25%',
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
    {
      key: 'userProfile',
      value: 'Perfil',
      columnWidth: '15%',
      leftBody: true,
      leftHeader: true,
    },
  ];

  function onSearch(e: string) {
    console.log(e);
    setSearchParam(e);
    setPageParam(1);
  }

  async function handleChangeStatus(item: IUserTableRow) {
    try {
      await changeUserStatus(item.userId);
    } catch (err) {
      toast.error('Não foi possivel realizar esta ação');
    } finally {
      refetch();
    }
  }

  function goToCreateUser() {
    navigate('/users/new');
  }

  return {
    searchParam,
    pageParam,
    setPageParam,
    totalPageParam,
    onSearch,
    statusParam,
    setStatusParam,
    headers,
    tableData,
    handleChangeStatus,
    goToCreateUser,
  };
}
