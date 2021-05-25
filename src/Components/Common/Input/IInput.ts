import React from "react";
//style
import { fontSizeType } from "StyledHelpers/Fonts";

export default interface IImput {
  borderColor?: string;
  background?: string;
  fontSize?: fontSizeType;
  height?: number;
  width?: number;
  color?: string;
  focused?: boolean;
  padding?: string;
  type?: string;

  id?: string;
  name?: string;
  value?: string;

  change?: (a: React.ChangeEvent<HTMLInputElement>) => void;
  focus?: (a: React.FocusEvent<HTMLInputElement>) => void;
  blur?: (a: React.FocusEvent<HTMLInputElement>) => void;
}
