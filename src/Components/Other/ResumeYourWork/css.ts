import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";
//interface
import IDisabe from "./IDisable";

export const TitleS = styled.div`
    color: ${Colors.BlueFont};
    font-size: ${FontSize[24]};
    font-weight: bolder;
    margin: 15px 0;
`;

export const PagginationS = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        display: block;
        border: none;
        background-color: transparent;
        text-transform: uppercase;
        text-align: center;
        margin: 5px;
        padding: 0;
    }
`;

export const PagginationElement = styled.button<IDisabe>`
    width: 80px;
    color: ${(props) => (props.disable ? Colors.GrayFont : Colors.BlueFont)};
    cursor: ${(props) => (props.disable ?'default':'pointer')};
`;

export const PagginationEle = styled.button`
    width: 15px;
    color: ${Colors.BlueFont};
    cursor: pointer;
`;
