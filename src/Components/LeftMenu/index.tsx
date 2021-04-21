import React, { FC } from "react";
import { useSelector } from "react-redux";
//data
import { Colors } from "../../StyledHelpers/Colors";
import { LinkS } from "../../StyledHelpers/Controls";
import { IconType } from "../Common/Icon/IconType";
//components
import Button from "./Button";
import BoxImage from "../Common/Image/Boxing";
//css
import * as CSS from "./css";
//interface
import IState from "../../Reduces/IState";
import IUsersReducer from "../../Reduces/users/IUsers";

const LeftMenu: FC = () => {
    const { userList } = useSelector<IState, IUsersReducer>((GS) => ({
        ...GS.user,
    }));

    return (
        <CSS.LeftMenuS>
            {console.log({ userList })}
            <CSS.UserDataS>
                <BoxImage
                    ImageName="./Image/Face.jpg"
                    Background={Colors.Bg3}
                    Alt="Zdj. profilowe"
                    BoxShadow={true}
                    Rounded={true}
                    MaxHeight={70}
                    MaxWidth={70}
                />
                <br />
                <CSS.UserNameS></CSS.UserNameS>
                <CSS.JobSubtitleS>Job title - Company</CSS.JobSubtitleS>
                <hr />
                <LinkS to="/Profile">
                    <Button
                        Icon={IconType.ecosystem}
                        SIcon={IconType.user_plus}
                    >
                        Your network
                    </Button>
                </LinkS>
                <LinkS to="/">
                    <Button Icon={IconType.publications} SIcon={IconType.plus}>
                        Your Publications
                    </Button>
                </LinkS>
            </CSS.UserDataS>
            <CSS.BottomConentS>
                <Button Icon={IconType.publications}>Publications</Button>
                <Button Icon={IconType.ecosystem}>Ecosystem</Button>
                <Button Icon={IconType.entities2}>Entities</Button>
            </CSS.BottomConentS>
        </CSS.LeftMenuS>
    );
};

export default LeftMenu;
