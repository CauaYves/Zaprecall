import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    font-family: 'Recursive', sans-serif;
    padding: 0;
    margin: 0;
    border: none;
    outline: 0;
    box-sizing: border-box;
    font-weight: 800;
  }
`;

export default GlobalStyle;
