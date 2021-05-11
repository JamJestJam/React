import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
//css
import * as CSS from "StyledHelpers/Controls";

export const ContentS = styled.div`
  width: fit-content;
  margin-left: auto;
  padding: 10px;
`;

export const TopBellS = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DataContentS = styled(CSS.TriangleConent)``;

export const ProfileS = styled(CSS.TriangleConentLeft)`
  flex: 1;
`;

export const DataS = styled(CSS.TriangleConentRight)`
  flex: 30;
  justify-content: flex-start;
`;

export const ElementS = styled.div`
  border-bottom: 1px solid ${Colors.Shadow};
`;
