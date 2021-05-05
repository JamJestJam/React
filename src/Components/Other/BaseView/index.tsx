import { useDispatch, useSelector } from "react-redux";
import React, { FC, useEffect } from "react";
//actions
import setCommentsLink from "Actions/comment/setCommentsLink";
import setUsersLink from "Actions/User/setUsersLink";
import setPostsLink from "Actions/Post/setPostsLink";
import getComments from "Actions/comment/getComments";
import getPhotos from "Actions/photo/getPhotos";
import getUsers from "Actions/User/getUsers";
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
//type
type GetComments = ReturnType<typeof getComments>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetUsers = ReturnType<typeof getUsers>;
type GetPost = ReturnType<typeof getPosts>;
type GetUser = ReturnType<typeof getUser>;
type SetPostsLink = ReturnType<typeof setPostsLink>;
type SetCommentsLink = ReturnType<typeof setCommentsLink>;
type SetUsersLink = ReturnType<typeof setUsersLink>;

const BaseView: FC = (Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const user = dispatch<GetUsers>(getUsers());
        const post = dispatch<GetPost>(getPosts());
        const comm = dispatch<GetComments>(getComments());
        const phot = dispatch<GetPhotos>(getPhotos());

        Promise.all([user, post, comm, phot])
            .then(([user, post, comm, phot]) => {
                return Promise.all([
                    dispatch<SetUsersLink>(setUsersLink(user, phot, post, comm)),
                    dispatch<SetPostsLink>(setPostsLink(post, phot, user, comm)),
                    dispatch<SetCommentsLink>(setCommentsLink(comm, post, user)),
                ]);
            })
            .then(([user, post, comm]) => {
                dispatch<GetUser>(getUser(user[0]));
            })
           
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
