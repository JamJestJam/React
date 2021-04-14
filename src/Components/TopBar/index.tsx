import React, { FC } from "react";
import { Colors } from "../../StyledHelpers/Colors";

import {
    TriangleConentCenter,
    TriangleConentLeft,
    TriangleConentRight,
} from "../../StyledHelpers/Controls";
import DropDown from "../Common/DropDown";
import Icon from "../Common/Icon";
import BoxIcon from "../Common/Icon/Boxing";
import { IconSize } from "../Common/Icon/IconSize";
import { IconType } from "../Common/Icon/IconType";
import BoxImage from "../Common/Image/Boxing";
import Search from "../Common/Input/Search";
import {
    EmElementS,
    EmLastElementS,
    TobBarS,
    IconBoxS,
    EbSpanS,
    PlatformS,
} from "./css";
import ITopBar from "./ITopBar";

const TopBar: FC<ITopBar> = (props) => {
    return (
        <TobBarS>
            <TriangleConentLeft>
                <Icon
                    IconType={IconType.logo}
                    IconSize={IconSize.Medium}
                    Alt="Logo"
                />
                <DropDown Text={props.SiteName} LeftIcon={props.Icon} Height="466px">
                    <Search Label="Filter..." Width={150} FontSize={"12"} />
                    <PlatformS>
                        <EbSpanS>Platform</EbSpanS>
                        <EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.house}
                                Alt=""
                            />
                            Home
                        </EmElementS>
                        <EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.publications}
                                Alt=""
                            />
                            Publications
                        </EmElementS>
                        <EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.people}
                                Alt=""
                            />
                            People
                        </EmElementS>
                        <EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.entities2}
                                Alt=""
                            />
                            Entities
                        </EmElementS>
                        <EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.administration}
                                Alt=""
                            />
                            Administration
                        </EmElementS>
                        <EbSpanS>Workspaces</EbSpanS>
                        <EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.logo}
                                Alt=""
                            />
                            Client contract
                        </EmElementS>
                        <EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.logo}
                                Alt=""
                            />
                            Supplier contract
                        </EmElementS>
                        <EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.logo}
                                Alt=""
                            />
                            Administration
                        </EmElementS>
                    </PlatformS>
                    <EbSpanS>Account</EbSpanS>
                    <EmElementS>
                        <BoxImage
                            ImageName="./Image/Face.jpg"
                            Background={Colors.Bg3}
                            Alt="Zdj. profilowe"
                            BoxShadow={true}
                            Rounded={true}
                            MaxHeight={30}
                            MaxWidth={30}
                            Margin="5px"
                        />
                        Joane-Marie de la cli...
                    </EmElementS>
                    <EmElementS>
                        <BoxIcon
                            IconSize={IconSize.Small}
                            IconType={IconType.privacy}
                            Alt=""
                        />
                        Privacy
                    </EmElementS>
                    <EmElementS>
                        <BoxIcon
                            IconSize={IconSize.Small}
                            IconType={IconType.settings}
                            Alt=""
                        />
                        Settings
                    </EmElementS>
                    <hr />
                    <EmLastElementS>
                        <BoxIcon
                            IconSize={IconSize.Small}
                            IconType={IconType.logout}
                            Alt=""
                        />
                        Logout
                    </EmLastElementS>
                </DropDown>
            </TriangleConentLeft>
            <TriangleConentCenter>
                <Search
                    Label="Search Legalcluster"
                    Width={500}
                    Button={true}
                    Border={true}
                />
            </TriangleConentCenter>
            <TriangleConentRight>
                <IconBoxS>
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={IconType.house}
                        Alt="Domek"
                    />
                </IconBoxS>
                <IconBoxS>
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={IconType.comments}
                        Background={Colors.Bg3}
                        Alt="Czat"
                        Rounded={true}
                        Value={3}
                    />
                </IconBoxS>
                <IconBoxS>
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={IconType.bell}
                        Background={Colors.Bg3}
                        Alt="Dzwoneczek"
                        Rounded={true}
                        Value={3}
                    />
                </IconBoxS>
            </TriangleConentRight>
        </TobBarS>
    );
};

export default TopBar;
