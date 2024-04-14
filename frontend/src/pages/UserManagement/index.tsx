import { BasePageContainer, InLineContainerBetween } from '../../assets/styles/shared';
import { Header2 } from '../../assets/styles/typography';
import BasicTable from '../../components/BasicTable';
import { ButtonMain } from '../../components/Button/ButtonMain';
import { Search } from '../../components/Input/Search';
import { ToggleBox } from '../../components/Toggle';
import UseUserManagementController from './useUserManagement.controller';

export function UserManagement() {
  const {
    searchParam,
    onSearch,
    statusParam,
    setStatusParam,
    headers,
    tableData,
    handleChangeStatus,
  } = UseUserManagementController();
  return (
    <>
      <Header2>Gestão de Usuários</Header2>
      <BasePageContainer>
        <InLineContainerBetween>
          <ToggleBox
            onOff={statusParam}
            onChangeActive={() => setStatusParam(true)}
            onChangeInactive={() => setStatusParam(false)}
          />
          <Search value={searchParam} onSearch={onSearch} />
          <ButtonMain label="Cadastrar Usuário" />
          <ButtonMain label="Editar dados" $secondaryStyle />
        </InLineContainerBetween>
        <BasicTable
          data={tableData}
          headers={headers}
          enableActions
          onChangeStatus={handleChangeStatus}
        />
      </BasePageContainer>
    </>
  );
}
