import React, { FC } from "react";
import { useSelector } from "react-redux";
//data
import { Colors } from "style/Colors";
import { IconSize } from "common/Icon/IconSize";
import { IconType } from "common/Icon/IconType";
//components
import Icon from "common/Icon";
import Search from "common/Input/Search";
import BoxIcon from "common/Icon/Boxing";
import DropDown from "common/DropDown";
import DdContent from "./DdContent";
//styles
import * as CSS from "./css";
import * as Controls from "style/Controls";
//interface
import IPageInfoReducer from "reduces/pageInfo/IPageInfoReducer";
import IState from "reduces/IState";

const TopBar: FC = () => {
    const { pageInfo } = useSelector<IState, IPageInfoReducer>((GS) => ({
        ...GS.pageInfo,
    }));

    return (
        <CSS.TobBarS>
            <Controls.TriangleConentLeft>
                <Icon
                    IconType={IconType.logo}
                    IconSize={IconSize.Medium}
                    Alt="Logo"
                />
                <DropDown
                    Text={pageInfo.pageName}
                    LeftIcon={pageInfo.pageIcon}
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
