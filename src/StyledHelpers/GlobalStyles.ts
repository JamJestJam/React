import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${Colors.Bg2};
    margin: 0;
    color: ${Colors.MainFont};
  }
`;