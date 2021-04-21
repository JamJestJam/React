import React, { FC } from "react";
import { useSelector } from "react-redux";
//data
import { Colors } from "../../../StyledHelpers/Colors";
import { IconSize } from "../../Common/Icon/IconSize";
import { IconType } from "../../Common/Icon/IconType";
//components
import BoxImage from "../../Common/Image/Boxing";
import Search from "../../Common/Input/Search";
import BoxIcon from "../../Common/Icon/Boxing";
//css
import * as CSS from "./css";
//interface
import IState from "../../../Reduces/IState";
import IUsersReducer from "../../../Reduces/users/IUsersReducer";

const DdContent: FC = () => {
    const { users } = useSelector<IState, IUsersReducer>((GS) => ({
        ...GS.user,
    }));

    return (
        <>
            <Search Label="Filter..." Width={150} FontSize={"12"} />
            <CSS.PlatformS>
                <CSS.EbSpanS>Platform</CSS.EbSpanS>
                <CSS.EmElementS>
                    <BoxIcon IconSize={IconSize.Small} IconType={IconType.house} Alt="" />
                    Home
                </CSS.EmElementS>
                <CSS.EmElementS>
                    <BoxIcon IconSize={IconSize.Small} IconType={IconType.publications} Alt="" />
                    Publications
                </CSS.EmElementS>
                <CSS.EmElementS>
                    <BoxIcon IconSize={IconSize.Small} IconType={IconType.people} Alt=""/>
                    People
                </CSS.EmElementS>
                <CSS.EmElementS>
                    <BoxIcon IconSize={IconSize.Small} IconType={IconType.entities2} Alt="" />
                    Entities
                </CSS.EmElementS>
                <CSS.EmElementS>
                    <BoxIcon IconSize={IconSize.Small} IconType={IconType.administration} Alt="" />
                    Administration
                </CSS.EmElementS>
                <CSS.EbSpanS>Workspaces</CSS.EbSpanS>
                <CSS.EmElementS>
                    <BoxIcon IconSize={IconSize.Small} IconType={IconType.logo} Alt=""/>
                    Client contract
                </CSS.EmElementS>
                <CSS.EmElementS>
                    <BoxIcon IconSize={IconSize.Small} IconType={IconType.logo} Alt="" />
                    Supplier contract
                </CSS.EmElementS>
                <CSS.EmElementS>
                    <BoxIcon IconSize={IconSize.Small} IconType={IconType.logo} Alt=""/>
                    Administration
                </CSS.EmElementS>
            </CSS.PlatformS>
            <CSS.EbSpanS>Account</CSS.EbSpanS>
            <CSS.EmElementS>
                <BoxImage ImageName="./Image/Face.jpg" Background={Colors.Bg3} Alt="Zdj. profilowe" BoxShadow={true} Rounded={true} MaxHeight={30} MaxWidth={30} Margin="5px" />
                {users[0]?.name}
            </CSS.EmElementS>
            <CSS.EmElementS>
                <BoxIcon IconSize={IconSize.Small} IconType={IconType.privacy} Alt="" />
                Privacy
            </CSS.EmElementS>
            <CSS.EmElementS>
                <BoxIcon IconSize={IconSize.Small} IconType={IconType.settings} Alt="" />
                Settings
            </CSS.EmElementS>
            <hr />
            <CSS.EmLastElementS>
                <BoxIcon IconSize={IconSize.Small} IconType={IconType.logout} Alt="" />
                Logout
            </CSS.EmLastElementS>
        </>
    );
};

export default DdContent;
