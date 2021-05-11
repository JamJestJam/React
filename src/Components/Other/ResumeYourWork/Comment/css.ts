import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";
//styles
import * as CSS from "StyledHelpers/Controls";

export const ContetS = styled(CSS.TriangleConent)`
    background-color: ${Colors.Bg1};
    padding: 10px 10px 0 10px;
    box-shadow: 2px 2px 1px 1px rgb(0 0 0 / 30%);
    margin: 5px 5px 5px 0;
    border-radius: 5px;
    height: 100px;
    flex-direction: column;
`;

export const TitleS = styled(CSS.TriangleConentLeft)`
    color: ${Colors.BlueFont};
    font-size: ${FontSize[20]};
`;

export const BodyS = styled(CSS.TriangleConentCenter)`
    align-items: baseline;
    justify-content: left;
    flex: 2;
`;

export const BottomS = styled(CSS.TriangleConentRight)`
    justify-content: left;
`;

export const MarginBoxS = styled.div`
    margin: 5px;
    font-size: ${FontSize[24]};
`;