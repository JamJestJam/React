import React, { FC } from "react";
//style
import { InputS } from "./css";
//inteface
import IImput from "./IInput";

const Input: FC<IImput> = (props) => {
  return (
    <InputS
      value={props.Value}
      name={props.name}
      id={props.id}
      type="text"
      BorderColor={props.BorderColor}
      Background={props.Background}
      FontSize={props.FontSize}
      Height={props.Height}
      Width={props.Width}
      Color={props.Color}
      onChange={props.Change}
      onFocus={(focusEvent) => props.Focus && props.Focus(focusEvent)}
      onBlur={(focusEvent) => props.Blur && props.Blur(focusEvent)}
    />
  );
};

export default Input;
