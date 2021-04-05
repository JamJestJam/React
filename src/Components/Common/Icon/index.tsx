import { FC } from "react";

import IIcon from "./IIcon";
import SIcon from "./css";

const Icon: FC<IIcon> = (props) => {
    return (
        <SIcon
            Size={props.IconSize}
            Border={props.Bordered ? true : false}
            src={props.IconType}
            alt={props.Alt}
        />
    );
};

export default Icon;