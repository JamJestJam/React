import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";
//interface
import IImputStyle from "./IInputStyle";

export const InputS = styled.input<IImputStyle>`
  border: none;

  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.borderColor || colors.Bg2};
  font-size: ${(props) => fontSize[props.fontSize || 18]};
  height: ${(props) => (props.jeight ? props.jeight + "px" : "auto")};
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  padding: ${(props) => (props.padding ? props.padding : "10px 10px 0px 5px")};
  transition: all 1s;
  display: block;

  :focus {
    outline: none;
  }
`;
