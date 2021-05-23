import styled from "styled-components";
//data
import { Colors } from "StyledHelpers/Colors";
import { FontSize } from "StyledHelpers/Fonts";

export const OptionS = styled.option``;

export const SelectS = styled.select`
  background-color: ${Colors.Bg5};
  color: ${Colors.BlueFont};
  font-size: ${FontSize[20]};
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 0;
  font-family: "Roboto", sans-serif;

  -webkit-appearance: none;
  -moz-appearance: none;
`;