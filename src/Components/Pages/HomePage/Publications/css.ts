import styled from "styled-components";
//PubDataS
import { fontSize } from "StyledHelpers/Fonts";
import { colors } from "StyledHelpers/Colors";

export const ContentS = styled.div`
  background-color: ${colors.Bg1};
  box-shadow: 1px 1px 3px ${colors.Shadow};
  border-radius: 5px;
  display: flex;
  overflow: hidden;
`;

export const LeftS = styled.div`
  position: relative;
  width: 300px;
  box-shadow: 0 0 1px ${colors.Shadow};
  background-color: ${colors.Bg1};
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
  color: ${colors.BlueFont};
  font-size: ${fontSize[24]};
  font-weight: bolder;
`;

export const SeeMoreS = styled.div`
  flex: 1;
  color: ${colors.BlueFont};
  font-size: ${fontSize[12]};
  height: 100%;
`;

export const TopPublicationS = styled.div`
  flex: 100;
`;

export const PublicationS = styled.div`
  width: calc(100% - 20px);
  text-align: justify;
  position: absolute;
  bottom: 0;
  color: ${colors.WhiteFont};
  background-color: ${colors.Shadow};
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
