import React, { FC } from "react";
//components
import Image from "../";
//css
import BoxImageS from "./css";
//inteface
import IBoxImage from "./IBoxImage";

const BoxImage: FC<IBoxImage> = (props) => {
    const Height = props.MaxHeight || 40;
    const Width = props.MaxWidth || 40;

    return (
        <BoxImageS
            Margin={props.Margin}
            Background={props.Background}
            Shadow={props.BoxShadow}
            Rounded={props.Rounded}
            Height={Height}
            Width={Width}
        >
            <Image
                ImageName={props.ImageName}
                MaxHeight={props.MaxHeight}
                MaxWidth={props.MaxWidth}
                Bordered={props.Bordered}
                Alt={props.Alt}
            />
        </BoxImageS>
    );
};

export default BoxImage;
