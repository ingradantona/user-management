import { useToaster, toast, ToastType } from 'react-hot-toast';
import { Box, BoxIcon, Divider } from './styles';
import { ReactElement } from 'react';
import { BsCheckCircle as Check, BsExclamationCircle as Exclamation } from 'react-icons/bs';
import { IoMdClose as X } from 'react-icons/io';
import { Body1 } from '../../assets/styles/typography';
import { useTheme } from 'styled-components';

export function ToastContainer() {
  const { colors: theme } = useTheme();
  const { toasts } = useToaster();

  const toastStyle: {
    [key in ToastType]?: {
      icon: ReactElement;
      class: string;
    };
  } = {
    error: {
      icon: <Exclamation />,
      class: 'toast-error',
    },
    success: {
      icon: <Check />,
      class: 'toast-success',
    },
  };

  return toasts.map((e) => {
    e.duration = 5000;
    if (e.visible) {
      return (
        <Box
          id={e.id}
          key={e.id}
          initial={{ x: '15%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={toastStyle[e.type] ? toastStyle[e.type]?.class : ''}
        >
          <BoxIcon>{toastStyle[e.type] ? toastStyle[e.type]?.icon : ''}</BoxIcon>
          <Body1 $fontColor={theme.background.secondary}>
            {typeof e.message == 'string' ? e.message : ''}
          </Body1>
          <BoxIcon>
            <Divider />
            <button onClick={() => toast.remove(e.id)}>
              <X />
            </button>
          </BoxIcon>
        </Box>
      );
    }
  });
}
