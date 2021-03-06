import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";

export const ContentS = styled.div`
  margin: 15px;
  width: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  > a {
    color: ${colors.BlueFont};
    &:hover {
      text-decoration: underline;
    }
  }
`;
