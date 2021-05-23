import { FC } from "react";
//style
import * as CSS from "./css";
//interface
import IOptionBox from "./IOptionBox";

const OptionBox: FC<IOptionBox> = (props) => {
  return (
    <CSS.SelectS
      id={props.id}
      name={props.name}
      defaultValue={props.value}
      onChange={props.Change}
      onFocus={props.Focus}
      onBlur={props.Blur}
    >
      {props.posibleOptions.map((val, i) => {
        return (
          <CSS.OptionS key={i} value={i}>
            {val}
          </CSS.OptionS>
        );
      })}
    </CSS.SelectS>
  );
};

export default OptionBox;
