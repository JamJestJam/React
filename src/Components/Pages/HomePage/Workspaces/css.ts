import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";

export const ElementsS = styled.div`
  display: flex;
`;

export const TitleS = styled.div`
  color: ${colors.BlueFont};
  font-size: ${fontSize[24]};
  font-weight: bolder;
  margin: 15px 0;
`;
