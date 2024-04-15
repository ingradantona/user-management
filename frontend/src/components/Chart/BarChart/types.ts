export interface PropsChart {
  dataChart: IChartData;
  titleChart?: string;
}

export interface IChartData {
  labels: string[];
  datasets: IChartDataset[];
}

export interface IChartDataset {
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor?: string[];
  minBarLength?: number;
}
