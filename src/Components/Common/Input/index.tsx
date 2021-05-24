import React, { FC, useEffect, useRef } from "react";
//style
import { InputS } from "./css";
//inteface
import IImput from "./IInput";

const Input: FC<IImput> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.focused === true)
      inputRef.current?.focus();
  }, [props.focused])

  return (
    <InputS
      value={props.value}
      name={props.name}
      id={props.id}
      type="text"
      borderColor={props.borderColor}
      background={props.background}
      fontSize={props.fontSize}
      jeight={props.height}
      width={props.width}
      color={props.color}
      onChange={props.change}
      onFocus={(focusEvent) => props.focus && props.focus(focusEvent)}
      onBlur={(focusEvent) => props.blur && props.blur(focusEvent)}
      ref={inputRef}
    />
  );
};

export default Input;
