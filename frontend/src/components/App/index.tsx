import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../../routes';
import { GlobalStyles } from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme/theme';
import { AuthProvider } from '../../context/AuthProvider';
import { getTokenLocalStorage } from '../../utils/hooks/useStorage';
import { useEffect } from 'react';

export default function App() {
  const tokenByLocalStorage = getTokenLocalStorage();

  useEffect(() => {
    if (tokenByLocalStorage && window.location.pathname === '/login') {
      window.location.href = '/home';
    }
  }, [tokenByLocalStorage]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <>
            <GlobalStyles />
            <Routes />
          </>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
