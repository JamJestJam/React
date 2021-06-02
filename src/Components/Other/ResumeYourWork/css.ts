import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";
//interface
import IResumeYourWorkS from "./IResumeYourWorkS";

export const TitleS = styled.div`
  color: ${colors.BlueFont};
  font-size: ${fontSize[24]};
  font-weight: bolder;
  margin: 15px 0;
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

export const ContentS = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ElementS = styled.div<IResumeYourWorkS>`
  padding: 5px;
  background-color: ${(props) => props.bgColor};
  color: ${props => props.color};
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
  }
`;
