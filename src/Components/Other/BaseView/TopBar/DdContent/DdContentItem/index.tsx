import React, { FC } from "react";
//compopnents
import BoxIcon from "Components/Common/Icon/Boxing";
import BoxImage from "Components/Common/Image/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { Colors } from "StyledHelpers/Colors";
//style
import { LinkS } from "StyledHelpers/Controls";
import * as CSS from "./css";
//interfaces
import IDdContentItem from "./IDdContentItem";

const DdContentItem: FC<IDdContentItem> = (props) => {
    return (
        <LinkS to={props.link}>
            <CSS.EmElementS>
                {props.imageIconSwitch ? (
                    <BoxImage
                        ImageName={props.image || ""}
                        Background={Colors.Bg3}
                        Alt="Zdj. profilowe"
                        BoxShadow={true}
                        Rounded={true}
                        MaxHeight={30}
                        MaxWidth={30}
                        Margin="5px"
                    />
                ) : (
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={props.icon || 0}
                        Alt={props.itemName}
                    />
                )}
                {props.itemName}
            </CSS.EmElementS>
        </LinkS>
    );
};

export default DdContentItem;
