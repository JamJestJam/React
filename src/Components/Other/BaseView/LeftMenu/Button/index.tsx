import React, { FC } from "react";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { Colors } from "StyledHelpers/Colors";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
//style
import * as CSS from "./css";
//inteface
import IButton from "./IButton";

const Button: FC<IButton> = (props) => {
  return (
    <CSS.ButtonS color={props.Color ? Colors.Bg1 : Colors.Bg2}>
      <CSS.ButtonLeftS>
        <BoxIcon
          IconType={props.Icon}
          IconSize={IconSize.small}
          Alt="Przycisk"
        />
        {props.children}
      </CSS.ButtonLeftS>
      {props.SIcon && (
        <CSS.ButtonRightS>
          <BoxIcon
            IconType={props.SIcon}
            IconSize={IconSize.small}
            Alt="Przycisk"
            boxShadow={true}
            boxWidth={30}
            boxHeight={20}
          />
        </CSS.ButtonRightS>
      )}
    </CSS.ButtonS>
  );
};

export default Button;
