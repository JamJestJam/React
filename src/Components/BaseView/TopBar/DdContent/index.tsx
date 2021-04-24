import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
//data
import { Colors } from "../../../../StyledHelpers/Colors";
import { IconSize } from "../../../Common/Icon/IconSize";
import { IconType } from "../../../Common/Icon/IconType";
//components
import BoxImage from "../../../Common/Image/Boxing";
import Search from "../../../Common/Input/Search";
import BoxIcon from "../../../Common/Icon/Boxing";
//css
import { LinkS } from "../../../../StyledHelpers/Controls";
import * as CSS from "./css";
//interface
import IUsersReducer from "../../../../Reduces/users/IUsersReducer";
import IState from "../../../../Reduces/IState";

const DdContent: FC = () => {
    const [State, SetState] = useState({
        Value: "",
    });

    const { user } = useSelector<IState, IUsersReducer>((GS) => ({
        ...GS.user,
    }));

    const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetState({
            ...State,
            Value: event.target.value,
        });
    };

    return (
        <>
            <Search
                Label="Filter..."
                Width={150}
                FontSize={"12"}
                Change={InputChange}
            />
            <CSS.PlatformS>
                <CSS.EbSpanS>Platform</CSS.EbSpanS>
                {"home".includes(State.Value.toLowerCase()) && (
                    <LinkS to="/">
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.house}
                                Alt=""
                            />
                            Home
                        </CSS.EmElementS>
                    </LinkS>
                )}
                {"publications".includes(State.Value.toLowerCase()) && (
                    <LinkS to="/Publications">
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.publications}
                                Alt=""
                            />
                            Publications
                        </CSS.EmElementS>
                    </LinkS>
                )}
                {"people".includes(State.Value.toLowerCase()) && (
                    <LinkS to="/People">
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.people}
                                Alt=""
                            />
                            People
                        </CSS.EmElementS>
                    </LinkS>
                )}
                {"entities".includes(State.Value.toLowerCase()) && (
                    <LinkS to="/Entities">
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.entities2}
                                Alt=""
                            />
                            Entities
                        </CSS.EmElementS>
                    </LinkS>
                )}
                {"administration".includes(State.Value.toLowerCase()) && (
                    <LinkS to="/Administration">
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.administration}
                                Alt=""
                            />
                            Administration
                        </CSS.EmElementS>
                    </LinkS>
                )}
                <CSS.EbSpanS>Workspaces</CSS.EbSpanS>
                {"client contract".includes(State.Value.toLowerCase()) && (
                    <LinkS to="/ClientContract">
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.logo}
                                Alt=""
                            />
                            Client contract
                        </CSS.EmElementS>
                    </LinkS>
                )}
                {"supplier contract".includes(State.Value.toLowerCase()) && (
                    <LinkS to="/SupplierContract">
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.logo}
                                Alt=""
                            />
                            Supplier contract
                        </CSS.EmElementS>
                    </LinkS>
                )}
                {"administration".includes(State.Value.toLowerCase()) && (
                    <LinkS to="/Administration">
                        <CSS.EmElementS>
                            <BoxIcon
                                IconSize={IconSize.Small}
                                IconType={IconType.logo}
                                Alt=""
                            />
                            Administration
                        </CSS.EmElementS>
                    </LinkS>
                )}
            </CSS.PlatformS>
            <CSS.EbSpanS>Account</CSS.EbSpanS>
            <LinkS to="/Profile">
                <CSS.EmElementS>
                    <BoxImage
                        ImageName={user?.picture || ""}
                        Background={Colors.Bg3}
                        Alt="Zdj. profilowe"
                        BoxShadow={true}
                        Rounded={true}
                        MaxHeight={30}
                        MaxWidth={30}
                        Margin="5px"
                    />
                    {user?.firstName || <span>&zwnj;</span>}
                    {""}
                    {user?.lastName || <span>&zwnj;</span>}
                </CSS.EmElementS>
            </LinkS>
            <LinkS to="/Privacy">
                <CSS.EmElementS>
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={IconType.privacy}
                        Alt=""
                    />
                    Privacy
                </CSS.EmElementS>
            </LinkS>
            <LinkS to="/Settings">
                <CSS.EmElementS>
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={IconType.settings}
                        Alt=""
                    />
                    Settings
                </CSS.EmElementS>
            </LinkS>
            <hr />
            <LinkS to="/Logout">
                <CSS.EmLastElementS>
                    <BoxIcon
                        IconSize={IconSize.Small}
                        IconType={IconType.logout}
                        Alt=""
                    />
                    Logout
                </CSS.EmLastElementS>
            </LinkS>
        </>
    );
};

export default DdContent;
