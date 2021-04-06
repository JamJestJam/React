import React, { FC } from "react";
import ImageS from "./css";
import IImage from "./IImage";
const Image: FC<IImage> = (props) => {
    const Width = props.MaxWidth  || 40;
    const Height = props.MaxHeight || 40;

    return (
        <ImageS
            Bordered={props.Bordered}
            src={props.ImageName}
            MaxHeight={Height}
            MaxWidth={Width}
            alt={props.Alt}
        />
    );
};

export default Image;
