import { BasePageContainer } from '../../assets/styles/shared';
import { Header2 } from '../../assets/styles/typography';
import { BarChart } from '../../components/Chart/BarChart';
import { Select } from '../../components/Input/Select';
import { BaseContainer } from './styles';
import UseReportController from './useReport.controller';

export function Report() {
  const { options, profile, setProfile, chartData } = UseReportController();
  return (
    <>
      <Header2>Dashboard</Header2>
      <BasePageContainer>
        <Select
          value={profile}
          values={options}
          onChangeValue={(value) => setProfile(value)}
          placeholder="Selecione um perfil"
        />
        <BaseContainer>
          <BarChart dataChart={chartData} titleChart="Usuários" />
        </BaseContainer>
      </BasePageContainer>
    </>
  );
}
