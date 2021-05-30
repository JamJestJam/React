import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import setCommentsLink, {
  SetCommentsLink,
} from "Actions/comment/setCommentsLink";
import setUsersLink, { SetUsersLink } from "Actions/User/setUsersLink";
import setPostsLink, { SetPostsLink } from "Actions/Post/setPostsLink";
import getComments, { GetComments } from "Actions/comment/getComments";
import getPhotos, { GetPhotos } from "Actions/photo/getPhotos";
import getUsers, { GetUsers } from "Actions/User/getUsers";
import getPosts, { GetPost } from "Actions/Post/getPosts";
import getUser, { GetUser } from "Actions/User/getUser";

//components
import LeftMenu from "./LeftMenu";
import TopBar from "./TopBar";
//style
import * as CSS from "./css";
//interface
import IPageInfoReducer from "Reduces/pageInfo/IPageInfoReducer";
import IState from "Reduces/IState";

const BaseView: FC = (props) => {
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
        dispatch<GetUser>(getUser(user[1]));
      });
  }, [dispatch]);

  useEffect(() => {
    document.title = pageInfo.pageTitle;
  });

  const { pageInfo } = useSelector<IState, IPageInfoReducer>((GS) => ({
    ...GS.pageInfo,
  }));

  return (
    <>
      {pageInfo.fullScreen ? <></> : <TopBar />}
      <CSS.PageContentS>
        {pageInfo.fullScreen ? <></> : <LeftMenu />}
        <CSS.PageFillS>{props.children}</CSS.PageFillS>
      </CSS.PageContentS>
    </>
  );
};

export default BaseView;
