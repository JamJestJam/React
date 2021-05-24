import styled from "styled-components";
//data
import { colors } from "StyledHelpers/Colors";
import { fontSize } from "StyledHelpers/Fonts";

export const OptionS = styled.option``;

export const SelectS = styled.select`
  background-color: ${colors.Bg5};
  color: ${colors.BlueFont};
  font-size: ${fontSize[20]};
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 0;
  font-family: "Roboto", sans-serif;

  -webkit-appearance: none;
  -moz-appearance: none;
`;