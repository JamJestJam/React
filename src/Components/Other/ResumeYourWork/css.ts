import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";

export const TitleS = styled.div`
  color: ${colors.BlueFont};
  font-size: ${fontSize[24]};
  font-weight: bolder;
  margin: 15px 0;
`;

export const EmElementS = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.Bg1};
  cursor: pointer;

  &:hover {
    filter: brightness(85%);
  }
`;
