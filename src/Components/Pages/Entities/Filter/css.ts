import styled from "styled-components";
import { colors } from "StyledHelpers/Colors";

export const ContentS = styled.div`
    background-color: ${colors.Bg1};
    width: calc(100% - 20px);
    min-height: 30px;
    position: absolute;
    padding: 10px;
    border-radius: 0 0 5px 5px;
    z-index: 1000;
    left: 0;
    box-shadow: 0 0 1px 1px ${colors.Shadow};
`;

export const FlineS = styled.div`
    color: ${colors.GrayFont};
`;

export const LineS = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const DivS = styled.div`
    width: 50px;
`;

export const BlueS = styled.div`
display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: ${colors.BlueFont};
`;