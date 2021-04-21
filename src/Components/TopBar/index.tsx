import React, { FC } from "react";
//data
import { Colors } from "../../StyledHelpers/Colors";
import { IconSize } from "../Common/Icon/IconSize";
import { IconType } from "../Common/Icon/IconType";
//components
import Icon from "../Common/Icon";
import Search from "../Common/Input/Search";
import BoxIcon from "../Common/Icon/Boxing";
import BoxImage from "../Common/Image/Boxing";
import DropDown from "../Common/DropDown";
//styles
import * as CSS from "./css";
import * as Controls from "../../StyledHelpers/Controls";
//interfaces
import ITopBar from "./ITopBar";

const TopBar: FC<ITopBar> = (props) => {
    return (
        <CSS.TobBarS>
            <Controls.TriangleConentLeft>
                <Icon
                    IconType={IconType.logo}
                    IconSize={IconSize.Medium}
                    Alt="Logo"
                />
                <DropDown Text={props.SiteName} LeftIcon={props.Icon} Height="466px">
                    <Search Label="Filter..." Width={150} FontSize={"12"} />
                    <CSS.PlatformS>
                        <CSS.EbSpanS>Platform</CSS.EbSpanS>
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.house}
                                Alt=""
                            />
                            Home
                        </CSS.EmElementS>
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.publications}
                                Alt=""
                            />
                            Publications
                        </CSS.EmElementS>
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.people}
                                Alt=""
                            />
                            People
                        </CSS.EmElementS>
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.entities2}
                                Alt=""
                            />
                            Entities
                        </CSS.EmElementS>
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.administration}
                                Alt=""
                            />
                            Administration
                        </CSS.EmElementS>
                        <CSS.EbSpanS>Workspaces</CSS.EbSpanS>
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.logo}
                                Alt=""
                            />
                            Client contract
                        </CSS.EmElementS>
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.logo}
                                Alt=""
                            />
                            Supplier contract
                        </CSS.EmElementS>
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.logo}
                                Alt=""
                            />
                            Administration
                        </CSS.EmElementS>
                    </CSS.PlatformS>
                    <CSS.EbSpanS>Account</CSS.EbSpanS>
                    <CSS.EmElementS>
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
                    </CSS.EmElementS>
                    <CSS.EmElementS>
                        <BoxIcon
                            IconSize={IconSize.Small}
                            IconType={IconType.privacy}
                            Alt=""
                        />
                        Privacy
                    </CSS.EmElementS>
                    <CSS.EmElementS>
                        <BoxIcon
                            IconSize={IconSize.Small}
                            IconType={IconType.settings}
                            Alt=""
                        />
                        Settings
                    </CSS.EmElementS>
                    <hr />
                    <CSS.EmLastElementS>
                        <BoxIcon
                            IconSize={IconSize.Small}
                            IconType={IconType.logout}
                            Alt=""
                        />
                        Logout
                    </CSS.EmLastElementS>
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
