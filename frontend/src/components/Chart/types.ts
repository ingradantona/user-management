export interface PropsChart {
  dataChart: IChartData;
  titleChart?: string;
}

export interface IChartData {
  labels: string[];
  datasets: IChartDataset[];
}

export interface IChartDataset {
  //   label: string;
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor?: string[];
  minBarLength?: number;
}

export interface IRadiusChartData {
  labels: string[];
  datasets: IRadiustChartDataset[];
}

export interface IRadiustChartDataset {
  data: number[];
  backgroundColor: string[];
}

export interface PropsRadiusChart {
  dataChart: IRadiusChartData;
  titleChart?: string;
  radius?: string | number;
  percentage?: string;
}
