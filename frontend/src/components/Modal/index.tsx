import ReactDOM from 'react-dom';
import { ContainerModal, Overlay } from './styles';
import { ModalProps } from './types';

export function Modal({ isModalActive, children }: ModalProps) {
  const modalRoot = document.getElementById('modal') as HTMLElement;

  if (!isModalActive) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ContainerModal>{children}</ContainerModal>
    </Overlay>,
    modalRoot,
  );
}
