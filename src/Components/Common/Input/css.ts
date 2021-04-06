import { Colors } from "./../../../StyledHelpers/Colors";
import styled from "styled-components";
import { fontSize } from "../../../StyledHelpers/Fonts";
import IImputStyle from "./IInputStyle";

export const InputS = styled.input<IImputStyle>`
    border: none;

    border-bottom: 2px solid ${(props) => props.BorderColor || Colors.Bg2};
    font-size: ${(props) => props.FontSize || fontSize[18]};
    height: ${(props) => props.Height+"px" || "auto"};
    width: ${(props) => props.Width+"px" || "300px"};
    padding: 10px 10px 0px 5px;
    transition: all 1s;
    display: block;

    :focus {
        outline: none;
    }
`;
