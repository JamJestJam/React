import { createGlobalStyle } from "styled-components";
//data
import { Colors } from "./Colors";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${Colors.Bg2};
    margin: 0;
    color: ${Colors.MainFont};
  }
`;
