import React, { FC, useState } from "react";
//style
import { InputS } from "./css";
//inteface
import IImput from "./IInput";

const Input: FC<IImput> = (props) => {
  const [State, SetState] = useState({
    Value: props.Value || "",
    Error: "",
  });

  const OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.Change && props.Change(event);

    SetState((prev) => {
      return {
        ...prev,
        Value: event.target.value,
      };
    });
  };

  return (
    <InputS
      value={State.Value}
      name={props.name}
      id={props.id}
      type="text"

      BorderColor={props.BorderColor}
      Background={props.Background}
      FontSize={props.FontSize}
      Height={props.Height}
      Width={props.Width}
      Color={props.Color}
      onChange={OnChange}
      onFocus={(focusEvent) => props.Focus && props.Focus(focusEvent)}
      onBlur={(focusEvent) => props.Blur && props.Blur(focusEvent)}
    />
  );
};

export default Input;
