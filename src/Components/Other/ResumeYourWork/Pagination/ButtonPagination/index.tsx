import { FC } from "react";
//interface
import IButtonPagination from "./IButton";
//style
import * as CSS from "./css";

const ButtonPagination: FC<IButtonPagination> = (p) => {
  const click = () => {
    p.change(p.set);
  };

  return (
    <CSS.PagginationEle disable={p.set === p.cur || p.disable} onClick={click}>
      {p.text}
    </CSS.PagginationEle>
  );
};

export default ButtonPagination;
