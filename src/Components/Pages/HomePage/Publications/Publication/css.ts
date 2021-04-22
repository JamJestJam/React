import { FontSize } from '../../../../../StyledHelpers/Fonts';
import styled from "styled-components";
import { Colors } from '../../../../../StyledHelpers/Colors';

export const ContentS = styled.div`
    display: flex;
    height: 80px;
    margin-top: 5px;
`; 

export const PublicationS = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    padding: 2px 0 0 0;
`;

export const PublicationTextS = styled.div`
    align-items: flex-start;
    margin-bottom: auto;
`;

export const PubDataS = styled.div`
    color: ${Colors.GrayFont};
    font-size: ${FontSize[12]};
    margin-top: auto;
    align-items: flex-end;
    display: flex;
    overflow: hidden;
    align-items: center;
`;

export const NameS = styled.div`
    color: ${Colors.MainFont};
    font-weight: bold;
`;