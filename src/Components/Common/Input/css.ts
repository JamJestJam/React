import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";
//interface
import IImputStyle from "./IInputStyle";

export const InputS = styled.input<IImputStyle>`
  border: none;

  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.BorderColor || Colors.Bg2};
  font-size: ${(props) => FontSize[props.FontSize || 18]};
  height: ${(props) => props.Height + "px" || "auto"};
  width: ${(props) => props.Width + "px" || "300px"};
  padding: 10px 10px 0px 5px;
  transition: all 1s;
  display: block;

  :focus {
    outline: none;
  }
`;
