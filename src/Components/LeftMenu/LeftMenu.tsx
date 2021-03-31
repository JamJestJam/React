import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Size } from "../../styledHelpers/Size";
import { IconsEnumSvg } from "../Common/Icon/IconsEnum";
import Button from "./Buttons/Button";
import UserData from "./UserData/UserData";

const Lmenu = styled.div`
    padding: ${Size.Space};
    width: ${Size.LefMenuWidth};
`;

export const LeftMenu: FC = () => {
    return (
        <Lmenu>
            <UserData />
            <Button value="Publications" Icon={IconsEnumSvg.publications} />
            <Button value="Ecosystem" Icon={IconsEnumSvg.ecosystem} />
            <Button value="Entities" Icon={IconsEnumSvg.entities2} />
        </Lmenu>
    );
};
