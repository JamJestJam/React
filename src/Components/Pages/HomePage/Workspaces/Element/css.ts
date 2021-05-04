import { FontSize } from '../../../../StyledHelpers/Fonts';
import { Colors } from '../../../../StyledHelpers/Colors';
import styled from 'styled-components';

export const ElementS = styled.div`
  height: 200px;
  width: 250px;
  border-radius: 5px;
  position: relative;
  background-color: ${Colors.Bg1};
  box-shadow: 2px 2px 1px 1px ${Colors.Shadow};
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
  color: ${Colors.GrayFont};

  img {
    margin: 0 5px;
  }
`;

export const TopS = styled.div`
  display: flex;
  font-weight: bold;
  font-size: ${FontSize[20]};
`;

export const IconBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  transform: translateY(-40px);
  background-color: ${Colors.Bg1};
  box-shadow: 0 0 1px 2px ${Colors.Shadow};
`;

export const TransformS = styled.div`
  transform: translateY(-40px);
  padding: 5px;
`;

export const LastS = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  color: ${Colors.GrayFont};
  font-size: ${FontSize[12]};
`;
