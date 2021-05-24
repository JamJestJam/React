import React, { FC, useRef, useState } from "react";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
//style
import * as CSS from "./css";

const InputFile: FC = () => {
  const [state, setState] = useState("File not set");
  const ref = useRef<HTMLInputElement>(null);
  const click = (e: React.MouseEvent) => {
    ref.current?.click();
  };
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <CSS.BoxS onClick={click}>
      <CSS.HiddenInputS type="file" ref={ref} onChange={change} />
      <BoxIcon
        iconSize={IconSize.medium}
        iconType={IconType.bell}
        onClick={() => { }}
        alt=""
        boxShadow={true}
      />
      <div>{state}</div>
    </CSS.BoxS>
  );
};

export default InputFile;
