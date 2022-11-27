import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    color: #f7f7f7;
  }
  body {
    font-family: SCDream5;
  }
`;

export default GlobalStyle;
