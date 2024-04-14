import { Avatar } from '@mui/material';
import styled from 'styled-components';

export const MuiAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.colors.primary.main} !important;
  color: ${({ theme }) => theme.colors.background.primary} !important;
  height: 3vw !important;
  width: 3vw !important;
  position: absolute;
  left: calc(3vw - 1.5vw);

  & svg {
    fill: ${({ theme }) => theme.colors.background.primary} !important;
  }
`;
