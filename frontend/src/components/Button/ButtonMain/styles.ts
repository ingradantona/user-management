import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

import { ButtonMainProps } from './types';

export const ButtonCreateContainer = styled.button<ButtonMainProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1vw;
  font-family: 'Poppins';
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '100%')};
  color: ${({ theme }) => theme.colors.background.secondary};
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  border-radius: 10px;
  font-size: clamp(0.8rem, 0.2rem + 1.45vh, 2.5rem);
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.primary.main)};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.typography.basic};
    background-color: ${({ theme }) => theme.colors.disabled};
  }

  ${({ $secondaryStyle }) =>
    $secondaryStyle &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary.main};
      border: solid 1px ${({ theme }) => theme.colors.primary.main};
      transition: all 0.4s ease;

      &:hover {
        background-color: ${({ theme }) => lighten(0.3, theme.colors.primary.main)};
        border: solid 1px ${({ theme }) => lighten(0.3, theme.colors.primary.main)};
        /* color: ${({ theme }) => theme.colors.background.secondary}; */
      }
    `}
`;
