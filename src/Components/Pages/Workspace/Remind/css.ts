import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import {
  TriangleConent,
  TriangleConentCenter,
  TriangleConentLeft,
  TriangleConentRight,
} from "StyledHelpers/Controls";
import { fontSize } from "StyledHelpers/Fonts";

export const TopS = styled.div`
  background-color: ${colors.Bg1};
  padding: 20px 0;
  > div {
    margin: 0 20px;
    box-shadow: 0 0 3px ${colors.Shadow};
    overflow: hidden;
    border-radius: 15px;
  }
`;

export const TopTileS = styled.div`
  padding: 10px;
  display: flex;
`;

export const TopBottonContS = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopContS = styled.div`
  flex: 1;
`;

export const BottomContS = styled.div`
  color: ${colors.GrayFont};
  font-size: ${fontSize[14]};
`;

export const MidBarS = styled.div`
  background-color: ${colors.Bg3};
  margin: 25px 0;
  padding: 20px;
`;

export const TContS = styled(TriangleConent)`
  justify-content: space-between;
  margin-top: 20px;
`;
export const TLeftS = TriangleConentLeft;
export const TRightS = TriangleConentRight;
export const TCentS = TriangleConentCenter;

export const EleS = styled.div`
  background-color: ${colors.Bg1};
  width: 270px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 2px ${colors.Shadow};
  > div {
    margin: 5px 5px;
  }
`;
