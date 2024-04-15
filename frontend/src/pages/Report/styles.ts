import styled from 'styled-components';

export const ChartsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    width: 30vw;
    height: auto;

    max-height: 100%;
  }
`;

export const BarChartContainer = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.background.border};
`;
