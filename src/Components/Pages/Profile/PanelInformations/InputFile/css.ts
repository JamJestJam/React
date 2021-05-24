import styled from "styled-components";
import { colors } from "StyledHelpers/Colors";

export const HiddenInputS = styled.input`
  display: none;
`;

export const BoxS = styled.div`
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.Shadow};

  > div:nth-child(odd) {
    margin-left: 10px;
  }
`;
