import React, { FC } from "react";
import styled from "styled-components";
import Button from "./Buttons/Button";
import UserData from "./UserData/UserData";

const Lmenu = styled.div``;

export const LeftMenu: FC = () => {
    return (
        <Lmenu>
            <UserData />
            <Button></Button>
            <Button></Button>
            <Button></Button>
        </Lmenu>
    );
};
