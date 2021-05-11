import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
//interface
import IDisabe from "./IDisable";

export const PagginationEle = styled.button<IDisabe>`
  color: ${(props) => (props.disable ? Colors.GrayFont : Colors.BlueFont)};
  cursor: ${(props) => (props.disable ? "default" : "pointer")};
`;
