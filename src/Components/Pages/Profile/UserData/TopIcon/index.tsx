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
      <Icon IconSize={IconSize.Mini} IconType={props.icon} Alt="" />
      {props.text}
    </CSS.FlexS>
  );
};

export default TopIcon;
