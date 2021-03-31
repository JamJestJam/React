import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { Box, Icon, Number } from "../IconStyle";
import IIcon from "../IIcon";

const NBox = styled(Box)`
    background-color: ${Colors.Bg3};
    border-radius: 100px;
`;

const SmallIconRound: FC<IIcon> = (props) => {
    return (
        <NBox>
            <Icon src={props.image} alt={props.alt} />
            <Number>{props?.value}</Number>
        </NBox>
    );
};

export default SmallIconRound;
