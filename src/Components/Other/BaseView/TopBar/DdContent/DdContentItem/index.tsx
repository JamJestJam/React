import React, { FC } from "react";
//compopnents
import BoxIcon from "Components/Common/Icon/Boxing";
import BoxImage from "Components/Common/Image/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { colors } from "StyledHelpers/Colors";
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
            imageName={props.image || ""}
            background={colors.Bg3}
            alt="Zdj. profilowe"
            boxShadow={true}
            rounded={true}
            maxHeight={30}
            maxWidth={30}
            margin="5px"
          />
        ) : (
          <BoxIcon
            iconSize={IconSize.small}
            iconType={props.icon || 0}
            alt={props.itemName}
          />
        )}
        {props.itemName}
      </CSS.EmElementS>
    </LinkS>
  );
};

export default DdContentItem;
