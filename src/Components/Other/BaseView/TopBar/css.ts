import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";

export const TobBarS = styled.div`
  background-color: ${colors.Bg1};
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
  max-height: 250px;
  overflow-y: scroll;
  border-bottom: 1px solid ${colors.Shadow};
`;

export const EmLastElementS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconBoxS = styled.div`
  margin: 0 2px;
`;

export const EbSpanS = styled.span`
  font-size: ${fontSize[12]};
  color: ${colors.GrayFont};
`;
