import React, { FC, useEffect } from "react";
import {useDispatch} from 'react-redux';
//actions
import userActions from '../../Actions/UserActions';
//components
import LeftMenu from "../LeftMenu";
import TopBar from "../TopBar";
//style
import * as CSS from "./css";
//interface
import IBaseView from "./IBaseView";

type GetUsers = ReturnType<typeof userActions>;

const BaseView: FC<IBaseView> = (Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(userActions());
    });

    return (
        <React.Fragment>
            <TopBar SiteName={Props.SiteName} Icon={Props.SiteIcon} />
            <CSS.PageContentS>
                <LeftMenu />
                <CSS.PageFillS>{Props.children}</CSS.PageFillS>
            </CSS.PageContentS>
        </React.Fragment>
    );
};

export default BaseView;
