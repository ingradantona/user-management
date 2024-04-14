import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../../routes';
import { GlobalStyles } from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
