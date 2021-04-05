import React, { FC } from "react";
import { Colors } from "../../StyledHelpers/Colors";
import { IconType } from "../Common/Icon/IconType";
import BoxImage from "../Common/Image/Boxing";
import Button from "./Button";
import { SLeftMenu, SUserData } from "./css";

const LeftMenu: FC = () => {
    return (
        <SLeftMenu>
            <SUserData>
                <BoxImage
                    ImageName="./Image/Face.jpg"
                    Background={Colors.Bg3}
                    Alt="Zdj. profilowe"
                    BoxShadow={true}
                    MaxHeight={100}
                    MaxWidth={100}
                    Rounded={true}
                />
                <hr />
                <Button Icon={IconType.ecosystem} SIcon={IconType.user_plus}>
                    Your network
                </Button>
                <Button Icon={IconType.publications} SIcon={IconType.plus}>
                    Your Publications
                </Button>
            </SUserData>
            <Button Icon={IconType.publications}>Publications</Button>
            <Button Icon={IconType.ecosystem}>Ecosystem</Button>
            <Button Icon={IconType.entities2}>Entities</Button>
        </SLeftMenu>
    );
};

export default LeftMenu;
