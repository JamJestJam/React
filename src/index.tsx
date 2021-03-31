import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./Components/HomePage/HomePage";
import { Colors } from "./styledHelpers/Colors";
import { createGlobalStyle } from 'styled-components'
import { Size } from "./styledHelpers/Size";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.Bg2}; 
    margin: ${Size.Space};
  }
`;

ReactDOM.render(<React.Fragment><HomePage /><GlobalStyle/></React.Fragment>, document.getElementById("root"));
