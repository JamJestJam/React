import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";

export const ContentS = styled.div`
  border-bottom: 1px solid ${colors.Shadow};
  padding: 20px;
`;

export const ElementS = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const TopS = styled.div`
  color: ${colors.BlackFont};
  font-size: ${fontSize[20]};
  margin: 20px 0;
`;

export const BottomS = styled.div`
  color: ${colors.GrayFont};
  margin: 10px 0;
`;

export const HiddenInputS = styled.input`
  display: none;
`;

export const InputBoxS = styled.div`
  height: 34px;
  border-bottom: 2px solid ${colors.Shadow};
  font-size: ${fontSize[18]};
  display: flex;
  align-items: center;
  color: ${colors.BlackFont};
  padding-left: 5px;
`;

export const BoxS = styled.div`
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.Shadow};

  > div:nth-child(odd) {
    margin-left: 10px;
  }
`;