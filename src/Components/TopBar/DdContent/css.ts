import styled from "styled-components";
import { Colors } from '../../../StyledHelpers/Colors';
import { FontSize } from '../../../StyledHelpers/Fonts';

export const TobBarS = styled.div`
    background-color: ${Colors.Bg1};
    height: 50px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
`;

export const EmElementS = styled.div`
    display: flex;
    align-items: center;
`;

export const PlatformS = styled.div`
    height: 250px;
    overflow-y: scroll;
    border-bottom: 1px solid ${Colors.Shadow};
`;

export const EmLastElementS = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconBoxS = styled.div`
    margin: 0 2px;
`;

export const EbSpanS = styled.div`
    font-size: ${FontSize[12]};
    color: ${Colors.GrayFont};
`;
