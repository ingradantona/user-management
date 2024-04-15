import styled from 'styled-components';

type LegendProps = {
  background?: string;
};

export const BarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const ChartContainer = styled.div<{ $totalWidth?: string }>`
  width: 100%;
  height: 85%;
  overflow-x: scroll;
  padding-bottom: 10px;
  & div {
    height: 100%;
    width: ${({ $totalWidth }) => ($totalWidth ? $totalWidth : '100%')};
  }
`;

export const TitleContainer = styled.div`
  height: 15%;
  position: sticky;
  right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LegendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

export const LegendChart = styled.div<LegendProps>`
  background-color: ${({ background, theme }) =>
    background ? background : theme.colors.background.border};
  width: 20px;
  height: 18px;
`;
