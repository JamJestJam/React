import { useDispatch } from "react-redux";
import React, { FC, useEffect } from "react";
//actions
import userActions from "../../Actions/User/getUsers";
import getUser from "../../Actions/User/getUser";
//components
import LeftMenu from "./LeftMenu";
import TopBar from "./TopBar";
//style
import * as CSS from "./css";
//interface

type GetUsers = ReturnType<typeof userActions>;
type GetUser = ReturnType<typeof getUser>;

const BaseView: FC = (Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(userActions()).then((prop)=>{
            dispatch<GetUser>(getUser(prop[1].id));
        });
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
