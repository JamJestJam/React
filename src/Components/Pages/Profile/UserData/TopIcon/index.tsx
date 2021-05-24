import React, { FC } from "react";
//components
import Icon from "Components/Common/Icon";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
//style
import * as CSS from "./css";
//interface
import ITopIcon from "./ITopIcon";

const TopIcon: FC<ITopIcon> = (props) => {
  return (
    <CSS.FlexS>
      <Icon iconSize={IconSize.mini} iconType={props.icon} alt="" />
      {props.text}
    </CSS.FlexS>
  );
};

export default TopIcon;
