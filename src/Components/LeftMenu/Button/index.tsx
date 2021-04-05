import React, { FC } from "react";
import BoxIcon from "../../Common/Icon/Boxing";
import { IconSize } from "../../Common/Icon/IconSize";
import { ButtonLeftS, ButtonRightS, ButtonS } from "./css";
import IButton from "./IButton";

const Button: FC<IButton> = (props) => {
    return (
        <ButtonS>
            <ButtonLeftS>
                <BoxIcon IconType={props.Icon} IconSize={IconSize.Small } Alt="Przycisk"/>
                {props.children}
            </ButtonLeftS>
            {props.SIcon && (
                <ButtonRightS>
                    <BoxIcon IconType={props.SIcon} IconSize={IconSize.Small} Alt="Przycisk" BoxShadow={true} BoxWidth={30} BoxHeight={20}/>
                </ButtonRightS>
            )}
        </ButtonS>
    );
};

export default Button;
