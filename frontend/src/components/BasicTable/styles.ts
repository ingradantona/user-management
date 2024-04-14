import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CircularProgressStyled = styled(CircularProgress)(({ theme }) => ({
  '& .MuiCircularProgress-svg': {
    color: theme.colors.primary.main,
  },
}));

export const Actions = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5vw;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 3.5vh;
    font-size: 1.5vh;

    & svg {
      transition: all 0.3s ease-in-out;
      fill: ${({ theme }) => theme.colors.typography.basic};
      height: 100%;
      width: auto;
    }

    &:hover {
      & svg {
        transition: all 0.3s ease-in-out;
        fill: ${({ theme }) => theme.colors.primary.main};
        height: 100%;
        width: auto;
      }
    }
  }

  .icon-button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.typography.basic};

    &:disabled {
      color: blue;
    }
  }
`;

export const Divider = styled.div`
  position: absolute;
  left: calc(50% - 49%);
  top: -1px;
  width: 98%;
  border-bottom: yellow;
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  & img {
    height: 35vh;
  }

  strong {
    font-weight: 600;
  }
`;

export const Progress = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0px;
`;
