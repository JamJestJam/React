import styled from "styled-components";
//data
import { fontSize } from "StyledHelpers/Fonts";
import { colors } from "StyledHelpers/Colors";

export const ElementS = styled.div`
  height: 200px;
  width: 250px;
  border-radius: 5px;
  position: relative;
  background-color: ${colors.Bg1};
  box-shadow: 2px 2px 1px 1px ${colors.Shadow};
  margin-right: 10px;
`;

export const ImageS = styled.div`
  width: 250px;
  height: 100px;
`;

export const ContentS = styled.div`
  width: 250px;
  height: 100px;
`;

export const InfoS = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.GrayFont};

  img {
    margin: 0 5px;
  }
`;

export const TopS = styled.div`
  display: flex;
  font-weight: bold;
  font-size: ${fontSize[20]};
`;

export const IconBoxS = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  transform: translateY(-40px);
  background-color: ${colors.Bg1};
  box-shadow: 0 0 1px 2px ${colors.Shadow};
`;

export const TransformS = styled.div`
  transform: translateY(-40px);
  padding: 5px;
`;

export const LastS = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  color: ${colors.GrayFont};
  font-size: ${fontSize[12]};
`;
