import { createGlobalStyle } from "styled-components";
//data
import { Colors } from "./Colors";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${Colors.Bg2};
    margin: 0;
    color: ${Colors.MainFont};
  }
`;
