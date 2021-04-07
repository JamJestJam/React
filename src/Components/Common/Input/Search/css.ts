import { fontSize } from "./../../../../StyledHelpers/Fonts";
import { Colors } from "./../../../../StyledHelpers/Colors";
import styled from "styled-components";
import IElementFocus from "./ILabelS";

export const FieldS = styled.div<IElementFocus>`
    border: 1px solid gray;
    transition: 0.2s ease all;
    position: relative;
    display: flex;

    border-bottom: ${(props) =>
        props.Focus ? "2px solid " + Colors.Bg4 : "2px solid gray"};
`;

export const LabelS = styled.label<IElementFocus>`
    color: ${(props) => (props.Focus ? Colors.GrayFont : Colors.BlueFont)};
    font-size: ${(props) => (props.Focus ? fontSize[12] : fontSize[18])};
    top: ${(props) => (props.Focus ? "0px" : "8px")};
    transition: 0.2s ease all;
    position: absolute;
    left: 5px;
`;
