import styled from "styled-components";
//style
import { colors } from "StyledHelpers/Colors";
//interface
import IIconStyle from "./IIconStyle";

const IconS = styled.img<IIconStyle>`
  border: 1px ${(props) => (props.border ? colors.Shadow : "transparent")} solid;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 5px;
`;

export default IconS;
