import React, { FC } from "react";
//components
import Image from "../";
//style
import BoxImageS from "./css";
//inteface
import IBoxImage from "./IBoxImage";

const BoxImage: FC<IBoxImage> = (props) => {
  const height = props.maxHeight || 40;
  const width = props.maxWidth || 40;

  return (
    <BoxImageS
      margin={props.margin}
      background={props.background}
      shadow={props.boxShadow}
      rounded={props.rounded}
      height={height}
      width={width}
    >
      <Image
        imageName={props.imageName}
        maxHeight={props.maxHeight}
        maxWidth={props.maxWidth}
        bordered={props.bordered}
        alt={props.alt}
      />
    </BoxImageS>
  );
};

export default BoxImage;
