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
    -webkit-touch-callout:none;
    user-select: none;
    -webkit-user-select:none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
  }

  body {
    display: flex;
    flex-direction: column;
    line-height: 1;
    max-width: 420px; // 페이지 최대 너비 420px 고정
    min-height: 100vh;
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 0;
    padding: 0;
  }

  body > iframe {
  display: none;
}
`;

export default GlobalStyle;
