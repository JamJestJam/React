import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
//data
import { Colors } from "StyledHelpers/Colors";
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import BoxImage from "Components/Common/Image/Boxing";
import Search from "Components/Common/Input/Search";
import BoxIcon from "Components/Common/Icon/Boxing";
//style
import { LinkS } from "StyledHelpers/Controls";
import * as CSS from "./css";
//interface
import IUsersReducer from "Reduces/users/IUsersReducer";
import IState from "Reduces/IState";
//json
import json from "Data/Pages.json";

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
                {json.Platform.map((item, i) => {
                    if (
                        item.Name.toLowerCase().includes(
                            State.Value.toLowerCase()
                        )
                    ) {
                        return (
                            <LinkS to={item.Link} key={`Link${i}`}>
                                <CSS.EmElementS key={`Em${i}`}>
                                    <BoxIcon
                                        IconSize={IconSize.Small}
                                        IconType={item.IconID}
                                        Alt={item.Name}
                                    />
                                    {item.Name}
                                </CSS.EmElementS>
                            </LinkS>
                        );
                    }
                    return <></>;
                })}
                <CSS.EbSpanS>Workspaces</CSS.EbSpanS>
                {json.Workspace.map((item, i) => {
                    if (
                        item.Name.toLowerCase().includes(
                            State.Value.toLowerCase()
                        )
                    ) {
                        return (
                            <LinkS to={item.Link} key={`Link${i}`}>
                                <CSS.EmElementS key={`Em${i}`}>
                                    <BoxIcon
                                        IconSize={IconSize.Small}
                                        IconType={item.IconID}
                                        Alt={item.Name}
                                    />
                                    {item.Name}
                                </CSS.EmElementS>
                            </LinkS>
                        );
                    }
                    return <></>;
                })}
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
                    {user?.name || <span>&zwnj;</span>}
                </CSS.EmElementS>
            </LinkS>
            firstName
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
