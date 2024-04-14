import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-weight: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: clamp(0.1rem, 0.8rem + 0.6vh, 1rem);
    color: ${({ theme }) => theme.colors.typography.basic};
  }


  body {
    background: ${({ theme }) => theme.colors.background.primary};
    width: 100%;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    transition: all 0.2s ease-in;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
    transition: all 0.2s ease-in;

  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    
    &:disabled {
    cursor: not-allowed;
    }
  }

  button, input {
    outline: 0;
  }

  input[type=password]::-ms-clear{
    display: none;
  }

  input[type=password]::-ms-reveal{
    display: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
      border: 1px solid white;
      -webkit-text-fill-color: black !important;
      -webkit-box-shadow: 0 0 0px 1000px #1212120A inset;
      transition: background-color 5000s ease-in-out 0s;
  }
`;
