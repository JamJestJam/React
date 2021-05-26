import styled from "styled-components";
//data
import { fontSize } from "StyledHelpers/Fonts";
import { colors } from "StyledHelpers/Colors";

export const ContentS = styled.div`
  border-bottom: 1px solid ${colors.Shadow};
  padding: 20px;
`;

export const TitleS = styled.span`
  font-size: ${fontSize[24]};
`;

export const TableS = styled.table`
  width: 100%;
  text-align: center;

  th {
    border-bottom: 1px solid ${colors.Shadow};
    padding: 10px;
  }

  select {
    background-color: ${colors.Bg1};
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export const SeeMore = styled.div`
  font-size: ${fontSize[20]};
  color: ${colors.BlueFont};
  margin-top: 15px;
  cursor: pointer;
`;