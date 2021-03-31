import React, { FC } from "react";
import { Box, Icon, Number } from "../IconStyle";
import IIcon from "../IIcon";

const SmallIcon: FC<IIcon> = props => {
    return (
        <Box>
            <Icon src={props.image} alt={props.alt} />
            <Number>{props?.value}</Number>
        </Box>
    );
};

export default SmallIcon;
