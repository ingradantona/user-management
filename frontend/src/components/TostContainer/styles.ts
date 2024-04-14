import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Box = styled(motion.div)`
  ${({ theme }) => css`
    position: absolute;
    z-index: 9999;
    top: 0;
    right: 0;
    display: flex;
    width: 25vw;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.danger};
    border-radius: 10px;
    padding: 1rem;
    gap: 1rem;
    margin: 1vw;

    &.toast-success {
      background-color: ${theme.colors.success};
    }
  `}
`;

export const Divider = styled.hr`
  width: 75%;
  border: ${({ theme }) => `0.8px solid ${theme.colors.background.border}`};
  border-radius: 100%;
  align-items: center;
`;

export const BoxIcon = styled.div`
  height: 3vh;
  display: flex;
  gap: 1vw;

  button {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    height: 100%;
    width: auto;
    stroke: ${({ theme }) => theme.colors.background.secondary};
    fill: ${({ theme }) => theme.colors.background.secondary};
  }
`;
