import styled from "styled-components";
//style
import { colors } from "StyledHelpers/Colors";
//interface
import IBoxImageStyle from "./IBoxImageStyle";

const BoxImageS = styled.div<IBoxImageStyle>`
  background-color: ${(props) =>
    props.background ? props.background : "Transparent"};
  box-shadow: 0 0 3px
    ${(props) => (props.shadow ? colors.Shadow : "transparent")};
  border-radius: ${(props) => (props.rounded ? "100%" : "0")};
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  display: flex;
`;

export default BoxImageS;
