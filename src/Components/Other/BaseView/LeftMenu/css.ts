import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";

export const LeftMenuS = styled.div`
  margin-right: 50px;
  width: 250px;
`;

export const UserDataS = styled.div`
  background-color: ${Colors.Bg1};
  border-radius: 15px;
  padding: 20px;
`;

export const JobSubtitleS = styled.div`
  font-size: ${FontSize[12]};
  color: ${Colors.GrayFont};
  text-align: center;
`;

export const UserNameS = styled.div`
  color: ${Colors.BlueFont};
  font-size: ${FontSize[16]};
  text-align: center;
  font-weight: bold;
`;

export const BottomConentS = styled.div`
  padding: 0 20px;
`;
