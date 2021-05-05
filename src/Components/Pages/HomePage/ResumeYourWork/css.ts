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

    div {
        text-transform: uppercase;
        text-align: center;
        margin: 5px;
    }
`;

export const PagginationElement = styled.div<IDisabe>`
    width: 80px;
    color: ${(props) => (props.disable ? Colors.GrayFont : "")};
    cursor: ${(props) => (props.disable ?'default':'pointer')};
`;

export const PagginationEle = styled.div`
    width: 15px;
    cursor: pointer;
`;
