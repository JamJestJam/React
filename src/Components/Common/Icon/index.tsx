import { FC } from "react";
//data
import { GetIcon } from "./IconType";
//components
import IIcon from "./IIcon";
//style
import IconS from "./css";

const Icon: FC<IIcon> = (props) => {
  return (
    <IconS
      size={props.iconSize}
      border={props.bordered || false}
      src={GetIcon(props.iconType)}
      alt={props.alt}
    />
  );
};

export default Icon;
