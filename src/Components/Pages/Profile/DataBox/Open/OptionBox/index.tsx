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
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
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
