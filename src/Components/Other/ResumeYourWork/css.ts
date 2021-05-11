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

export const EmElementS = styled.div`
    display: flex;
    align-items: center;
    background-color: ${Colors.Bg1};
    cursor: pointer;

    &:hover{
        filter: brightness(85%);
    }
`;