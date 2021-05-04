import React, { FC } from "react";
//data
import { IconSize } from "common/Icon/IconSize";
//components
import BoxIcon from "common/Icon/Boxing/";
//css
import * as CSS from "./css";
//inteface
import IButton from "./IButton";

const Button: FC<IButton> = (props) => {
    return (
        <CSS.ButtonS>
            <CSS.ButtonLeftS>
                <BoxIcon
                    IconType={props.Icon}
                    IconSize={IconSize.Small}
                    Alt="Przycisk"
                />
                {props.children}
            </CSS.ButtonLeftS>
            {props.SIcon && (
                <CSS.ButtonRightS>
                    <BoxIcon
                        IconType={props.SIcon}
                        IconSize={IconSize.Small}
                        Alt="Przycisk"
                        BoxShadow={true}
                        BoxWidth={30}
                        BoxHeight={20}
                    />
                </CSS.ButtonRightS>
            )}
        </CSS.ButtonS>
    );
};

export default Button;
