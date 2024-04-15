import { BasePageContainer } from '../../assets/styles/shared';
import { Header2 } from '../../assets/styles/typography';
import { BarChart } from '../../components/Chart/BarChart';
import { Select } from '../../components/Input/Select';
import { BarChartContainer, ChartsContainer } from './styles';
import UseReportController from './useReport.controller';
import Icon from '../../assets/images/chart_icon.svg';

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
        <ChartsContainer>
          <BarChartContainer>
            <BarChart dataChart={chartData} titleChart="Total de usuários" />
          </BarChartContainer>
          <img src={Icon} />
        </ChartsContainer>
      </BasePageContainer>
    </>
  );
}
