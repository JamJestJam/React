import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";

export const ContetS = styled.div`
    background-color: ${Colors.Bg1};
    padding: 10px;
    box-shadow: 2px 2px 1px 1px rgb(0 0 0 / 30%);
    margin: 5px 5px 5px 0;
    border-radius: 5px;
    height: 80px;
`;

export const TitleS = styled.div`
    color: ${Colors.BlueFont};
    font-size: ${FontSize[20]}
`;