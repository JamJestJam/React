import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";

export const EmElementS = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.Bg1};

  &:hover {
    filter: brightness(85%);
  }
`;
