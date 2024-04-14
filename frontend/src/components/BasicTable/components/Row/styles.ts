import { useTheme } from 'styled-components';

export function rowStyles() {
  const { colors: theme } = useTheme();

  return {
    position: 'relative',
    borderBottom: `${theme.background.border} 1px solid`,

    '& .MuiTableCell-body': {
      border: 'none',
      color: theme.typography.basic,
      fontFamily: '"Inter Medium", sans-serif',
      fontWeight: '500',
      fontSize: '1.5vh',
      paddingY: '1vh',
      textOverflow: 'ellipsis',
      maxWidth: '100px',
    },
  };
}
