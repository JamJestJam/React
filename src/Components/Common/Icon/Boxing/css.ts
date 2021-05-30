import styled from "styled-components";
//style
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";
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
    ${(props) => (props.shadow ? colors.Shadow : "transparent")};
  border-radius: ${(props) => (props.rounded ? "100%" : "0")};
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  ${(props) => (props.click ? "cursor: pointer;" : "")}
`;

export const BoxIconValueS = styled.div`
  background-color: ${colors.Bg4};
  color: ${colors.WhiteFont};
  font-size: ${fontSize[10]};
  border-radius: 100%;
  position: absolute;
  padding: 2px 5px;
  right: 0;
  top: 0;
`;
