import React, { FC } from "react";
import { Colors } from "../../StyledHelpers/Colors";

import {
    TriangleConentCenter,
    TriangleConentLeft,
    TriangleConentRight,
} from "../../StyledHelpers/Controls";
import Icon from "../Common/Icon";

import BoxIcon from "../Common/Icon/Boxing";
import { IconSize } from "../Common/Icon/IconSize";
import { IconType } from "../Common/Icon/IconType";
import Search from "../Common/Input/Search";
import { STobBar } from "./css";

const TopBar: FC = () => {
    return (
        <STobBar>
            <TriangleConentLeft>
                <Icon
                    IconType={IconType.logo}
                    IconSize={IconSize.Medium}
                    Alt="Logo"
                />
            </TriangleConentLeft>
            <TriangleConentCenter>
                <Search Label="Szukaj" Width={500}/>
            </TriangleConentCenter>
            <TriangleConentRight>
                <BoxIcon
                    IconSize={IconSize.Small}
                    IconType={IconType.house}
                    Alt="Domek"
                />
                <BoxIcon
                    IconSize={IconSize.Small}
                    IconType={IconType.comments}
                    Background={Colors.Bg3}
                    Alt="Czat"
                    Rounded={true}
                    Value={3}
                />
                <BoxIcon
                    IconSize={IconSize.Small}
                    IconType={IconType.bell}
                    Background={Colors.Bg3}
                    Alt="Dzwoneczek"
                    Rounded={true}
                    Value={3}
                />
            </TriangleConentRight>
        </STobBar>
    );
};

export default TopBar;
