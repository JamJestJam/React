import styled from "styled-components";
//style
import { colors } from "StyledHelpers/Colors";
import { TriangleConent, TriangleConentRight } from "StyledHelpers/Controls";
//interface
import IDropDownElement, { IDropDownS } from "./IEmContent";

export const ExpanderS = styled.div<IDropDownS>`
  width: ${(props) => (props.width ? props.width : "230px")};
  min-height: 10px;
  margin: 0 10px;
  position: relative;
`;

export const ExpanderButtonS = styled(TriangleConent) <IDropDownElement>`
  box-shadow: 0px 0px 2px
    ${(props) => (props.expanded ? colors.Shadow : "transparent")};
  transition: 1s all;
`;

export const ContentS = styled.div<IDropDownElement>`
  position: absolute;
  background-color: ${colors.Bg1};
  z-index: 200;
  width: calc(100% - 10px);
  padding: 0 5px;
  max-height: ${(props) => (props.expanded ? props.height : "0vh")};
  overflow-y: hidden;
  transition: 0.4s all ease-in;
  box-shadow: 0px 0px 2px ${colors.Shadow};
`;

export const RoundS = styled.div<IDropDownElement>`
  transition: 0.3s all ease-in;
  transform: rotate(${(props) => (props.expanded ? "180deg" : "0deg")});
`;

export const FlexRight = styled(TriangleConentRight)`
  flex: 0;
`;