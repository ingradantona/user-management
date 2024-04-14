import styled, { css } from 'styled-components';
import { IToggleBox } from './types';

export const ToggleContainer = styled.section`
  display: flex;
`;

export const Toggle = styled.div<IToggleBox>`
  display: flex;
  border-bottom: 3.5px solid ${({ theme }) => theme.colors.background.border};
  min-width: ${({ togglewidth }) => (togglewidth ? togglewidth : '')};

  button {
    font-size: clamp(0.15rem, 0.3rem + 1.2vh, 3rem);
    font-family: 'Poppins';
    white-space: nowrap;
    text-align: left;
    color: ${({ theme }) => theme.colors.typography.basic};
    border: none;
    background-color: transparent;
    min-width: 6vw;
    padding: 0 20px 0 0;
    height: 6vh;

    ${({ $isActive }) =>
      $isActive &&
      css`
        color: ${({ theme }) => theme.colors.primary.main};
      `}
  }

  &:hover {
    border-width: 3.5px;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      border-width: 3.5px;
      border-color: ${theme.colors.primary.main};
    `}
`;
