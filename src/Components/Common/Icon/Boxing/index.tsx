import React, { FC } from "react";
//components
import Icon from "../";
//style
import { BoxIconS , BoxIconValueS } from "./css";
//interface
import IBoxIcon from "./IBoxIcon";

const BoxIcon: FC<IBoxIcon> = (props) => {
  return (
    <BoxIconS
      size={props.IconSize}
      rounded={props.rounded}
      background={props.background}
      shadow={props.boxShadow}
      width={props.boxWidth}
      height={props.boxHeight}
      click={props.onClick !== undefined}
      onClick={(event) => props.onClick && props.onClick(event)}
    >
      <Icon
        IconSize={props.IconSize}
        Alt={props.Alt}
        IconType={props.IconType}
        Bordered={props.Bordered}
      />
      {props.value && <BoxIconValueS>{props.value}</BoxIconValueS>}
    </BoxIconS>
  );
};

export default BoxIcon;
