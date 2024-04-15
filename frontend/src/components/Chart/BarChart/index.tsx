import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { PropsChart } from '../types';
import { useTheme } from 'styled-components';
import {
  BarContainer,
  ChartContainer,
  LegendChart,
  LegendContainer,
  TitleContainer,
} from './styles';
import { Header2, Body1 } from '../../../assets/styles/typography/index';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function BarChart({ dataChart, titleChart }: PropsChart) {
  const { colors: theme } = useTheme();

  const total = dataChart?.labels.length;

  console.log(dataChart);

  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    indexAxis: 'x',

    datasets: {
      bar: {
        barPercentage: 1,
        maxBarThickness: 80,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
        enabled: true,
        backgroundColor: theme.background.primary,
        titleColor: theme.typography.title,
        bodyColor: theme.typography.basic,
        displayColors: false,
        titleMarginBottom: 5,
        padding: 5,

        callbacks: {},
      },
    },
    font: {
      family: 'Helvetica',
    },

    animation: {
      duration: 50,
    },

    scales: {
      x: {
        min: 0,
        grid: {
          display: false,
        },
        ticks: {
          color: theme.typography.basic,
        },
      },
      y: {
        min: 0,
        ticks: {
          color: theme.typography.basic,
          stepSize: 1,
        },
      },
    },
  };

  const width = total > 10 ? `${1000 + (total - 10) * 80}px` : '100%';

  return (
    <BarContainer>
      <TitleContainer>
        <Header2 $fontColor={theme.typography.basic}>{titleChart}</Header2>
        <LegendContainer>
          {dataChart.labels.map((legend: any, i: number) => {
            return (
              <div key={i}>
                <LegendChart background={i ? theme.danger : theme.success} />
                <Body1>{legend}</Body1>
              </div>
            );
          })}
        </LegendContainer>
      </TitleContainer>
      <ChartContainer $totalWidth={width}>
        <div>
          <Bar data={dataChart} options={options} />
        </div>
      </ChartContainer>
    </BarContainer>
  );
}
