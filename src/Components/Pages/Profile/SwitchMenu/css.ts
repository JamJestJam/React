import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";

export const ContentS = styled.div`
  background-color: ${colors.Bg1};
  border-bottom: 1px solid ${colors.Shadow};
  position: relative;
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