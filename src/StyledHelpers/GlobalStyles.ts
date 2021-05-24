import { createGlobalStyle } from "styled-components";
//data
import { colors } from "./Colors";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.Bg2};
    margin: 0;
    color: ${colors.MainFont};
  }
`;
