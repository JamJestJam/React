import React, { FC } from "react";
import { useSelector } from "react-redux";
//data
import { colors } from "StyledHelpers/Colors";
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
            imageName={user?.photo?.url || ""}
            background={colors.Bg3}
            alt="Zdj. profilowe"
            boxShadow={true}
            rounded={true}
            maxHeight={70}
            maxWidth={70}
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
            icon={IconType.ecosystem}
            iconRight={IconType.user_plus}
            color={true}
          >
            Your network
          </Button>
        </LinkS>
        <LinkS to="/Publications">
          <Button
            icon={IconType.publications}
            iconRight={IconType.plus}
            color={true}
          >
            Your Publications
          </Button>
        </LinkS>
      </CSS.UserDataS>
      <CSS.BottomConentS>
        <LinkS to="/Publications">
          <Button icon={IconType.publications}>Publications</Button>
        </LinkS>
        <LinkS to="/Ecosystem">
          <Button icon={IconType.ecosystem}>Ecosystem</Button>
        </LinkS>
        <LinkS to="/Entities">
          <Button icon={IconType.entities2}>Entities</Button>
        </LinkS>
      </CSS.BottomConentS>
    </CSS.LeftMenuS>
  );
};

export default LeftMenu;
