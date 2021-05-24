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

export const ElementS = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const TopS = styled.div`
  color: ${colors.BlackFont};
  font-size: ${fontSize[20]};
  margin: 20px 0;
`;

export const BottomS = styled.div`
  color: ${colors.GrayFont};
  margin: 10px 0;
`;