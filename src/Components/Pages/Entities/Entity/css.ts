import { colors } from "StyledHelpers/Colors";
import styled from "styled-components";
import { fontSize } from "StyledHelpers/Fonts";
import IEntityS from "./IEntityS";

export const ContentS = styled.div<IEntityS>`
  width: ${(props) => (props.direction ? "calc(100% - 10px)" : "250px")};
  display: flex;
  padding: 5px;
  margin: 10px 0;
  box-shadow: 1px 1px 1px 1px ${colors.Shadow};
  border-radius: 5px;
  div {
    border-radius: 10px;
  }
`;
export const LeftS = styled.div`
  margin-right: 5px;
`;

export const RightS = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopS = styled.div`
  flex: 1;
  color: ${colors.BlueFont};
  font-size: ${fontSize[22]};
  align-items: flex-start;
`;

export const BottomS = styled.div`
  align-items: flex-end;
`;
