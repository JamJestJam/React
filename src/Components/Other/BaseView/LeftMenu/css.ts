import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";

export const LeftMenuS = styled.div`
  margin-right: 50px;
  width: 250px;
`;

export const UserDataS = styled.div`
  display: block;
  background-color: ${colors.Bg1};
  border-radius: 15px;
  padding: 20px;
`;

export const JobSubtitleS = styled.div`
  font-size: ${fontSize[12]};
  color: ${colors.GrayFont};
  text-align: center;
`;

export const UserNameS = styled.div`
  color: ${colors.BlueFont};
  font-size: ${fontSize[16]};
  text-align: center;
  font-weight: bold;
`;

export const BottomConentS = styled.div`
  padding: 0 20px;
`;
