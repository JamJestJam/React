import React, { FC } from "react";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { colors } from "StyledHelpers/Colors";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
//style
import * as CSS from "./css";
//inteface
import IButton from "./IButton";

const Button: FC<IButton> = (props) => {
  return (
    <CSS.ButtonS color={props.color ? colors.Bg1 : colors.Bg2}>
      <CSS.ButtonLeftS>
        <BoxIcon
          iconType={props.icon}
          iconSize={IconSize.small}
          alt="Przycisk"
        />
        {props.children}
      </CSS.ButtonLeftS>
      {props.iconRight && (
        <CSS.ButtonRightS>
          <BoxIcon
            iconType={props.iconRight}
            iconSize={IconSize.small}
            alt="Przycisk"
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
