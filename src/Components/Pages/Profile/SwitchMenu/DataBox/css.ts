import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";

export const ContentS = styled.div`
  border-bottom: 1px solid ${colors.Shadow};
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


