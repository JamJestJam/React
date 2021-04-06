import { fontSize } from "./../../../../StyledHelpers/Fonts";
import { Colors } from "./../../../../StyledHelpers/Colors";
import styled from "styled-components";
import ILabelS from "./ILabelS";
import BoxIcon from "../../Icon/Boxing";

export const FieldS = styled.div`
    border: 1px solid gray;
    position: relative;
    display: flex;
`;

export const LabelS = styled.label<ILabelS>`
    color: ${(props) => (props.Focus) ?Colors.GrayFont:Colors.BlueFont};
    font-size: ${(props) => (props.Focus) ? fontSize[12] : fontSize[18]};
    top: ${(props) => (props.Focus ? "0px" : "8px")};
    transition: 0.2s ease all;
    position: absolute;
    left: 5px;
`;