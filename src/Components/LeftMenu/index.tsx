import React, { FC } from "react";
import { Colors } from "../../StyledHelpers/Colors";
import { LinkS } from "../../StyledHelpers/Controls";
import { IconType } from "../Common/Icon/IconType";
import BoxImage from "../Common/Image/Boxing";
import Button from "./Button";
import {
    BottomConentS,
    JobSubtitleS,
    LeftMenuS,
    UserDataS,
    UserNameS,
} from "./css";

const LeftMenu: FC = () => {
    return (
        <LeftMenuS>
            <UserDataS>
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
                <UserNameS>Humberta Swift</UserNameS>
                <JobSubtitleS>Job title - Company</JobSubtitleS>
                <hr />
                <LinkS to="/Profile">
                    <Button Icon={IconType.ecosystem} SIcon={IconType.user_plus}>
                        Your network
                    </Button>
                </LinkS>
                <LinkS to="/">
                    <Button Icon={IconType.publications} SIcon={IconType.plus}>
                        Your Publications
                    </Button>
                </LinkS>
            </UserDataS>
            <BottomConentS>
                <Button Icon={IconType.publications}>Publications</Button>
                <Button Icon={IconType.ecosystem}>Ecosystem</Button>
                <Button Icon={IconType.entities2}>Entities</Button>
            </BottomConentS>
        </LeftMenuS>
    );
};

export default LeftMenu;
