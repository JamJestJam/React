import styled from "styled-components";
//style
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";
//interface
import IBoxIconStyle from "./IBoxIconStyle";

export const BoxIconS = styled.div<IBoxIconStyle>`
  background-color: ${(props) =>
    props.background ? props.background : "Transparent"};
  height: ${(props) =>
    props.height ? props.height + "px" : "calc(" + props.size + " + 20px)"};
  min-width: ${(props) =>
    props.width ? props.width + "px" : "calc(" + props.size + " + 20px)"};
  box-shadow: 0 0 3px
    ${(props) => (props.shadow ? Colors.Shadow : "transparent")};
  border-radius: ${(props) => (props.rounded ? "100%" : "0")};
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  cursor: ${props=>props.click?"pointer":"auto"}
`;

export const BoxIconValueS = styled.div`
  background-color: ${Colors.Bg4};
  color: ${Colors.WhiteFont};
  font-size: ${FontSize[10]};
  border-radius: 100%;
  position: absolute;
  padding: 2px 5px;
  right: 0;
  top: 0;
`;
