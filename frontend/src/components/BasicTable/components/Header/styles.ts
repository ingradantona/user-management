import { useTheme } from 'styled-components';

export function headerStyle() {
  const { colors: theme } = useTheme();

  return {
    background: theme.secondary.main,
    border: 'none',
    '& .MuiTableCell-head': {
      border: 'none',
      color: theme.typography.title,
      fontFamily: '"Poppins Medium"',
      fontSize: 'clamp(0.4rem, 0.05rem + 1.9vh, 1.6rem)',
      paddingY: 1.2,
    },
    '& :first-child': {
      borderTopLeftRadius: '8px',
    },

    '& :last-child': {
      borderTopRightRadius: '8px',
    },
  };
}
