import CircularProgress from '@mui/material/CircularProgress';
import { ButtonCreateContainer } from './styles';
import { ButtonMainProps } from './types';

export function ButtonMain({ label, isLoading, width, ...rest }: ButtonMainProps) {
  return (
    <ButtonCreateContainer
      type="button"
      disabled={isLoading}
      {...rest}
      width={width ? width : '100%'}
    >
      {!isLoading && label}
      {isLoading && <CircularProgress size={32} disableShrink />}
    </ButtonCreateContainer>
  );
}
