import { FC } from "react";

import IIcon from "./IIcon";
import IconS from "./css";

const Icon: FC<IIcon> = (props) => {
    return (
        <IconS
            Size={props.IconSize}
            Border={props.Bordered || false}
            src={props.IconType}
            alt={props.Alt}
        />
    );
};

export default Icon;
