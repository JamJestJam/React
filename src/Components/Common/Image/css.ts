import styled from "styled-components";
//style
import { colors } from "StyledHelpers/Colors";
//interface
import IImageStyle from "./IImageStyle";

const ImageS = styled.img<IImageStyle>`
  border: 1px ${(props) => (props.bordered ? colors.Shadow : "transparent")}
    solid;
  display: ${(props) => (props.active ? "block" : "none")};
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export default ImageS;
