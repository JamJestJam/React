import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";

export const ContentS = styled.div`
  background-color: ${Colors.Bg1};
  position: relative;
  padding: 20px;
`;

export const NameS = styled.span`
  display: flex;
  align-items: center;
  color: ${Colors.GrayFont};
  font-size: ${FontSize[20]};
`;

export const ContentBoxS = styled.div`
  background-color: ${Colors.Bg5};
  color: ${Colors.BlueFont};
  font-size: ${FontSize[20]};
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
`;

export const ButtonsS = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  > div {
    cursor: pointer;
  }
`;
