import React, { FC } from "react";
import { useSelector } from "react-redux";
//data
import { Colors } from "StyledHelpers/Colors";
import { IconType } from "Components/Common/Icon/IconType";
//components
import Button from "./Button";
import BoxImage from "Components/Common/Image/Boxing";
//style
import { LinkS } from "StyledHelpers/Controls";
import * as CSS from "./css";
//interface
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";

const LeftMenu: FC = () => {
  const { user } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));

  return (
    <CSS.LeftMenuS>
      <CSS.UserDataS>
        <LinkS to="/Profile">
          <BoxImage
            ImageName={user?.photo?.url || ""}
            Background={Colors.Bg3}
            Alt="Zdj. profilowe"
            BoxShadow={true}
            Rounded={true}
            MaxHeight={70}
            MaxWidth={70}
          />
          <br />
          <CSS.UserNameS>{user?.name || <span>&zwnj;</span>}</CSS.UserNameS>
          <CSS.JobSubtitleS>
            {user?.company.name || <span>&zwnj;</span>}
          </CSS.JobSubtitleS>
        </LinkS>
        <hr />
        <LinkS to="/Network">
          <Button
            Icon={IconType.ecosystem}
            SIcon={IconType.user_plus}
            Color={true}
          >
            Your network
          </Button>
        </LinkS>
        <LinkS to="/Publications">
          <Button
            Icon={IconType.publications}
            SIcon={IconType.plus}
            Color={true}
          >
            Your Publications
          </Button>
        </LinkS>
      </CSS.UserDataS>
      <CSS.BottomConentS>
        <LinkS to="/Publications">
          <Button Icon={IconType.publications}>Publications</Button>
        </LinkS>
        <LinkS to="/Ecosystem">
          <Button Icon={IconType.ecosystem}>Ecosystem</Button>
        </LinkS>
        <LinkS to="/Entities">
          <Button Icon={IconType.entities2}>Entities</Button>
        </LinkS>
      </CSS.BottomConentS>
    </CSS.LeftMenuS>
  );
};

export default LeftMenu;
