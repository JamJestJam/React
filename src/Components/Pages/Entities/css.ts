import styled from "styled-components";
import { colors } from "StyledHelpers/Colors";
import * as CSS from "StyledHelpers/Controls";
import IEntityS from "./IEntityS";

export const ContentS = styled.div`
  background-color: ${colors.Bg1};
  padding: 10px;
  position: relative;
`;

export const EntitiesS = styled.div<IEntityS>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LineS = styled(CSS.TriangleConent)`
  align-items: center;
  position: relative;
`;

export const LeftS = styled(CSS.TriangleConentLeft)``;

export const RightS = styled(CSS.TriangleConentRight)``;

export const PointerS = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const EmElementS = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.Bg1};
  cursor: pointer;

  &:hover {
    filter: brightness(85%);
  }
`;

export const RightBorder = styled.div`
  border-right: 1px solid ${colors.Shadow};
  display: flex;
  align-items: center;
  padding: 5px;
`;
