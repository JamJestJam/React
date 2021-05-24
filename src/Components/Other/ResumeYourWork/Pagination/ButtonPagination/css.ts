import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
//interface
import IDisabe from "./IDisable";

export const PagginationEle = styled.button<IDisabe>`
  color: ${(props) => (props.disable ? colors.GrayFont : colors.BlueFont)};
  cursor: ${(props) => (props.disable ? "default" : "pointer")};
`;
