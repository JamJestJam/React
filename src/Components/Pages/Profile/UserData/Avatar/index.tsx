import React, { FC } from "react";
import { useSelector } from "react-redux";
//components
import BoxImage from "Components/Common/Image/Boxing";
//style
import * as CSS from "./css";
import { LinkS } from "StyledHelpers/Controls";
//interface
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";

const Avatar: FC = () => {
  const { user } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));
  return (
    <CSS.ContentS>
      <BoxImage
        ImageName={user?.photo?.url || ""}
        Alt=""
        Margin="10px"
        MaxHeight={100}
        MaxWidth={100}
        Rounded={true}
      />
      <LinkS to="./Profile">See Profile</LinkS>
    </CSS.ContentS>
  );
};

export default Avatar;
