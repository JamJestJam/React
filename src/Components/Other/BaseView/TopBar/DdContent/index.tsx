import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import Search from "Components/Common/Input/Search";
import BoxIcon from "Components/Common/Icon/Boxing";
import DbContentItem from "./DdContentItem/index";
//style
import { LinkS } from "StyledHelpers/Controls";
import * as CSS from "./css";
//interface
import IUsersReducer from "Reduces/user/IUsersReducer";
import IState from "Reduces/IState";
//json
import json from "Data/Pages.json";
//functions
import compare from "Functions/compare";

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
                    if (compare(item.Name, State.Value)) {
                        return (
                            <DbContentItem
                                link={item.Link}
                                itemName={item.Name}
                                icon={item.IconID}
                                imageIconSwitch={false}
                                key={i}
                            />
                        );
                    }
                    return <div key={i}></div>;
                })}
                <CSS.EbSpanS>Workspaces</CSS.EbSpanS>
                {json.Workspace.map((item, i) => {
                    if (compare(item.Name, State.Value)) {
                        return (
                            <DbContentItem
                                link={item.Link}
                                itemName={item.Name}
                                icon={item.IconID}
                                imageIconSwitch={false}
                                key={i}
                            />
                        );
                    }
                    return <div key={i}></div>;
                })}
            </CSS.PlatformS>
            <CSS.EbSpanS>Account</CSS.EbSpanS>
            <DbContentItem
                link="/Profile"
                itemName={user?.shortName || "&zwnj"}
                image={user?.photo?.url}
                imageIconSwitch={true}
            />
            <DbContentItem
                link="/Privacy"
                itemName={"Privacy"}
                icon={IconType.privacy}
                imageIconSwitch={false}
            />
            <DbContentItem
                link="/Settings"
                itemName={"Settings"}
                icon={IconType.settings}
                imageIconSwitch={false}
            />
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
