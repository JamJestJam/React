import React, { FC } from "react";
//components
import Icon from "../";
//style
import { SBoxIcon as BoxIconS, SBoxIconValue } from "./css";
//interface
import IBoxIcon from "./IBoxIcon";

const BoxIcon: FC<IBoxIcon> = (props) => {
  return (
    <BoxIconS
      Size={props.IconSize}
      Rounded={props.Rounded}
      Background={props.Background}
      Shadow={props.BoxShadow}
      Width={props.BoxWidth}
      Height={props.BoxHeight}

      onClick={(event)=>props.onClick&&props.onClick(event)}
    >
      <Icon
        IconSize={props.IconSize}
        Alt={props.Alt}
        IconType={props.IconType}
        Bordered={props.Bordered}
      />
      {props.Value && <SBoxIconValue>{props.Value}</SBoxIconValue>}
    </BoxIconS>
  );
};

export default BoxIcon;
