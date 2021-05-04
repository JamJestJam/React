import { useDispatch, useSelector } from "react-redux";
import React, { FC, useEffect } from "react";
//actions
import getComments from "Actions/comment/getComments";
import userActions from "Actions/User/getUsers";
import getPosts from "Actions/Post/getPosts";
import getUser from "Actions/User/getUser";
//components
import LeftMenu from "./LeftMenu";
import TopBar from "./TopBar";
//style
import * as CSS from "./css";
//interface
import IPageInfoReducer from "Reduces/pageInfo/IPageInfoReducer";
import IState from "Reduces/IState";
//types
type GetComments = ReturnType<typeof getComments>;
type GetUsers = ReturnType<typeof userActions>;
type GetPost = ReturnType<typeof getPosts>;
type GetUser = ReturnType<typeof getUser>;

const BaseView: FC = (Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(userActions()).then((prop) => {
            dispatch<GetUser>(
                getUser(prop[Math.floor(Math.random() * prop.length)])
            );
        });
        dispatch<GetPost>(getPosts());
        dispatch<GetComments>(getComments());
    }, [dispatch]);

    useEffect(() => {
        document.title = pageInfo.pageTitle;
    });

    const { pageInfo } = useSelector<IState, IPageInfoReducer>((GS) => ({
        ...GS.pageInfo,
    }));

    return (
        <>
            <TopBar />
            <CSS.PageContentS>
                <LeftMenu />
                <CSS.PageFillS>{Props.children}</CSS.PageFillS>
            </CSS.PageContentS>
        </>
    );
};

export default BaseView;
