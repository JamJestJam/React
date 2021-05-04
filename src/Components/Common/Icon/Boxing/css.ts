import styled from "styled-components";
//style
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";
//interface
import IBoxIconStyle from "./IBoxIconStyle";

export const SBoxIcon = styled.div<IBoxIconStyle>`
    background-color: ${(props) =>
        props.Background ? props.Background : "Transparent"};
    height: ${(props) =>
        props.Height ? props.Height + "px" : "calc(" + props.Size + " + 20px)"};
    min-width: ${(props) =>
        props.Width ? props.Width + "px" : "calc(" + props.Size + " + 20px)"};
    box-shadow: 0 0 3px
        ${(props) => (props.Shadow ? Colors.Shadow : "transparent")};
    border-radius: ${(props) => (props.Rounded ? "100%" : "0")};
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
`;

export const SBoxIconValue = styled.div`
    background-color: ${Colors.Bg4};
    color: ${Colors.WhiteFont};
    font-size: ${FontSize[10]};
    border-radius: 100%;
    position: absolute;
    padding: 2px 5px;
    right: 0;
    top: 0;
`;
