import { Container } from './styles';
import { FormGroupProps } from './types';

export function FormGroup({ children, error }: FormGroupProps) {
  return (
    <Container>
      {error && <small>{error}</small>}
      {children}
    </Container>
  );
}
