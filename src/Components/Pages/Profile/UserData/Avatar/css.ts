import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";

export const ContentS = styled.div`
  margin: 15px;
  width: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  > a {
    color: ${Colors.BlueFont};
    &:hover {
      text-decoration: underline;
    }
  }
`;
