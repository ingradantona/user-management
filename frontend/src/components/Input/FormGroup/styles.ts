import styled from 'styled-components';
import { FormGroupProps } from './types';

export const Container = styled.div<FormGroupProps>`
  width: 100%;
  position: relative;
  small {
    color: ${({ theme }) => theme.colors.danger};
    font-family: 'Poppins Medium';
    font-size: 1.8vh;
    position: absolute;
    right: 1vw;
  }
`;
