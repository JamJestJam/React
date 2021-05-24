import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";

export const EmElementS = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.Bg1};

  &:hover {
    filter: brightness(85%);
  }
`;
