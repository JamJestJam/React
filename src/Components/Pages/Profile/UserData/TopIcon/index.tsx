import React, { FC } from "react";
//components
import Icon from "Components/Common/Icon";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
//interface
import ITopIcon from "./ITopIcon";

const TopIcon: FC<ITopIcon> = (props) => {
    return <div>
        <Icon 
            IconSize={IconSize.Mini}
            IconType={props.icon}
            Alt=""
          />
        {props.text}
    </div>;
}

export default TopIcon;