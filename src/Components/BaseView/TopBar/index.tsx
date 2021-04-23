import React, { FC } from "react";
//data
import { Colors } from "../../../StyledHelpers/Colors";
import { IconSize } from "../../Common/Icon/IconSize";
import { IconType } from "../../Common/Icon/IconType";
//components
import Icon from "../../Common/Icon";
import Search from "../../Common/Input/Search";
import BoxIcon from "../../Common/Icon/Boxing";
import DropDown from "../../Common/DropDown";
import DdContent from "./DdContent";
//styles
import * as CSS from "./css";
import * as Controls from "../../../StyledHelpers/Controls";


const TopBar: FC = ()  => {
    return (
        <CSS.TobBarS>
            <Controls.TriangleConentLeft>
                <Icon
                    IconType={IconType.logo}
                    IconSize={IconSize.Medium}
                    Alt="Logo"
                />
                <DropDown
                    Text="tekst"
                    LeftIcon={IconType.house}
                    Height="466px"
                >
                    <DdContent />
                </DropDown>
            </Controls.TriangleConentLeft>
            <Controls.TriangleConentCenter>
                <Search
                    Label="Search Legalcluster"
                    Width={500}
                    Button={true}
                    Border={true}
                />
            </Controls.TriangleConentCenter>
            <Controls.TriangleConentRight>
                <CSS.IconBoxS>
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={IconType.house}
                        Alt="Domek"
                    />
                </CSS.IconBoxS>
                <CSS.IconBoxS>
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={IconType.comments}
                        Background={Colors.Bg3}
                        Alt="Czat"
                        Rounded={true}
                        Value={3}
                    />
                </CSS.IconBoxS>
                <CSS.IconBoxS>
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={IconType.bell}
                        Background={Colors.Bg3}
                        Alt="Dzwoneczek"
                        Rounded={true}
                        Value={3}
                    />
                </CSS.IconBoxS>
            </Controls.TriangleConentRight>
        </CSS.TobBarS>
    );
};

export default TopBar;
