import { createGlobalStyle } from "styled-components";
import "../styles/reset.css";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-break: keep-all;
  }
  body {
    font-family: 'Arial', sans-serif;
    background-color: #ffffff;
    color: #212529;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
