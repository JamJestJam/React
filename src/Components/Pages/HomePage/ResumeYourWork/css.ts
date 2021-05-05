import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";

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

    div{ 
        text-transform: uppercase;
        text-align: center;
        margin: 5px;
    }
`

export const PagginationElement = styled.div`
    width: 80px;
`;

export const PagginationEle = styled.div`
    width: 15px;
`;