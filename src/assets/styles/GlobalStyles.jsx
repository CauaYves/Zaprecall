import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Recursive';
    src: url('../fonts/Recursive-Regular.ttf') format('truetype');
  }

  body {
    font-family: 'Recursive', sans-serif;
    padding: 0;
    margin: 0;
    border: none;
    outline: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
