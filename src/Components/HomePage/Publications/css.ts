import styled from "styled-components";
import { FontSize } from "../../../StyledHelpers/Fonts";
import { Colors } from "./../../../StyledHelpers/Colors";

export const ContentS = styled.div`
    background-color: ${Colors.Bg1};
    box-shadow: 1px 1px 3px ${Colors.Shadow};
    border-radius: 5px;
    display: flex;
    overflow: hidden;
`;

export const LeftS = styled.div`
    position: relative;
    width: 300px;
    box-shadow: 0 0 1px ${Colors.Shadow};
    background-color: ${Colors.Bg1};
`;

export const RightS = styled.div`
    display: flex;
    flex-direction: column;
    width: 580px;
    margin: 0 10px;
    height: 300px;
`;

export const TitleS = styled.div`
    flex: 1;
    height: fit-content;
    color: ${Colors.BlueFont};
    font-size: ${FontSize[24]};
    font-weight: bolder;
`;

export const SeeMoreS = styled.div`
    flex: 1;
    color: ${Colors.BlueFont};
    font-size: ${FontSize[12]};
    height: 100%;
`;

export const TopPublicationS = styled.div`
    flex: 100;
`;

export const PublicationS = styled.div`
    position: absolute;
    bottom: 0;
    color: ${Colors.WhiteFont};
    background-color: ${Colors.Shadow};
    padding: 10px;
    text-align: justify;
    text-shadow: black 1px 1px 1px, black 1px -1px 1px, black -1px 1px 1px,
        black -1px -1px 1px;
`;

export const PubDataS = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
`;
