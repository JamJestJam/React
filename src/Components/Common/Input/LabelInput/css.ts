import styled from "styled-components";
//style
import { fontSize } from "StyledHelpers/Fonts";
import { colors } from "StyledHelpers/Colors";
//interface
import ILabelS from "./ILabelS";
import IFieldS from "./IFieldS";

export const FieldS = styled.div<IFieldS>`
  border: 1px solid ${(props) => (props.border ? colors.Shadow : "transparent")};
  transition: 0.2s ease all;
  position: relative;
  display: flex;

  border-bottom: ${(props) =>
    props.focus ? "2px solid " + colors.Bg4 : "2px solid " + colors.Shadow};
`;

export const LabelS = styled.label<ILabelS>`
  color: ${(props) => (props.focus ? colors.GrayFont : colors.BlueFont)};
  font-size: ${(props) =>
    props.focus
      ? "calc(" + fontSize[props.fontSize] + "* 0.75)"
      : fontSize[props.fontSize]};
  top: ${(props) => (props.focus ? "0px" : "8px")};
  transition: 0.2s ease all;
  position: absolute;
  left: 50%;
  cursor: text;
  transform: translateX(-50%);
`;
