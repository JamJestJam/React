import { useDispatch } from "react-redux";
import React, { FC, useEffect } from "react";
//actions
import userActions from "../../Actions/User/getUsers";
import getLoginUser from "../../Actions/User/getLoginUser";
//components
import LeftMenu from "../LeftMenu";
import TopBar from "../TopBar";
//style
import * as CSS from "./css";

type GetUsers = ReturnType<typeof userActions>;
type GetLoginUser = ReturnType<typeof getLoginUser>;

const BaseView: FC = (Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(userActions());
        dispatch<GetLoginUser>(getLoginUser(1));
    });

    return (
        <>
            <TopBar/>
            <CSS.PageContentS>
                <LeftMenu />
                <CSS.PageFillS>{Props.children}</CSS.PageFillS>
            </CSS.PageContentS>
        </>
    );
};

export default BaseView;
