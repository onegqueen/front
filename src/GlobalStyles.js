import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    color: white;
  }
  body {
    font-family: SCDream5;
  }
`;

export default GlobalStyle;
