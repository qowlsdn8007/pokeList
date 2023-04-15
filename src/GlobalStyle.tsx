import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    background-color: #f2f4f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100%;
  }

  body {
    line-height: 1;
    max-width: 420px;
    height: 100vh;
    background-color: #fff;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
