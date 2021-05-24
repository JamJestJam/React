import React, { FC, useState } from "react";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
import Input from "..";
//style
import * as CSS from "./css";
//interface./..
import ILabelInput from "./ILabelInput";

const InputLabel: FC<ILabelInput> = (props) => {
  const [state, setState] = useState({
    focus: false,
    value: props.value || "",
  });

  const inputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    props.focus && props.focus(event);

    setState({
      ...state,
      focus: true,
    });
  };

  const inputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    props.blur && props.blur(event);

    setState({
      ...state,
      focus: false,
    });
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.change && props.change(event);

    setState({
      ...state,
      value: event.target.value,
    });
  };

  const focus = (event: React.MouseEvent) => {
    setState({
      ...state,
      focus: true
    });
  }

  return (
    <CSS.FieldS focus={state.focus} border={props.border}>
      <Input
        borderColor={props.borderColor}
        background={props.background}
        fontSize={props.fontSize}
        height={props.height}
        width={props.width}
        color={props.color}
        value={state.value}
        name={props.name}
        id={props.id}
        focused={state.focus}
        blur={inputBlur}
        focus={inputFocus}
        change={inputChange}
      />
      <CSS.LabelS
        onClick={focus}
        focus={state.focus || state.value.length > 0}
        fontSize={props.fontSize || "18"}
      >
        {props.label}
      </CSS.LabelS>
      {props.button && (
        <BoxIcon
          iconSize={props.iconSize || IconSize.small}
          iconType={props.buttonType || IconType.search}
          alt="Szukaj"
        />
      )}
    </CSS.FieldS>
  );
};

export default InputLabel;
