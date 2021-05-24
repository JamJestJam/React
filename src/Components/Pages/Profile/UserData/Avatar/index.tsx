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
        imageName={user?.photo?.url || ""}
        alt=""
        margin="10px"
        maxHeight={100}
        maxWidth={100}
        rounded={true}
      />
      <LinkS to="./Profile">See Profile</LinkS>
    </CSS.ContentS>
  );
};

export default Avatar;
