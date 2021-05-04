import styled from "styled-components";
import { Colors } from "style/Colors";
import { FontSize } from "style/Fonts";

export const ElementsS = styled.div`
    display: flex;
`;

export const TitleS = styled.div`
    color: ${Colors.BlueFont};
    font-size: ${FontSize[24]};
    font-weight: bolder;
    margin: 15px 0;
`;
