import React, { FC, useState } from "react";
//css
import ImageS from "./css";
//interface
import IImage from "./IImage";

const Image: FC<IImage> = (props) => {
    const [State, SetState] = useState({
        active: false,
    });

    const Width = props.MaxWidth || 40;
    const Height = props.MaxHeight || 40;

    const load = () => {
        SetState({
            ...State,
            active: true,
        });
    };

    return (
        <ImageS
            Bordered={props.Bordered}
            active={State.active}
            src={props.ImageName}
            MaxHeight={Height}
            MaxWidth={Width}
            alt={props.Alt}
            onLoad={load}
        />
    );
};

export default Image;
