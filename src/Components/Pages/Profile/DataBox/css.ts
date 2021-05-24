import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";

export const ContentS = styled.div`
  background-color: ${colors.Bg1};
  border-bottom: 1px solid ${colors.Shadow};
  position: relative;
  padding: 20px;
`;

export const NameS = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.GrayFont};
  font-size: ${fontSize[20]};
`;

export const ContentBoxS = styled.div`
  background-color: ${colors.Bg5};
  color: ${colors.BlueFont};
  font-size: ${fontSize[20]};
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
`;

export const ButtonsS = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  > div {
    cursor: pointer;
  }
`;
