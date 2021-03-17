import React, { FC } from "react";
import Button from "./Buttons/Button";
import UserData from "./UserData/UserData";

export const LeftMenu: FC = () => {
  return <div>
    <UserData />
    <Button></Button>
    <Button></Button>
    <Button></Button>
  </div>;
};
