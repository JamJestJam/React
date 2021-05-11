import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
//Components
import DropDown from "Components/Common/DropDown";
import Search from "Components/Common/Input/Search";
import SingleComment from "./Comment";
//Data
import { IconType } from "Components/Common/Icon/IconType";
//style
import * as CSS from "./css";
import * as Controls from "StyledHelpers/Controls";
import { IconSize } from "Components/Common/Icon/IconSize";
//interface
import IState from "Reduces/IState";
import ICommentReducer from "Reduces/comment/ICommentReducer";
import compare from "Functions/compare";
import IUsersReducer from "Reduces/user/IUsersReducer";
import Paggination from "./Pagination";
import BoxIcon from "Components/Common/Icon/Boxing";

const commentPerPage = 8;

const ResumeYourWork: FC = () => {
  const { comments, user } = useSelector<
    IState,
    ICommentReducer & IUsersReducer
  >((GS) => ({
    ...GS.comments,
    ...GS.user,
  }));

  const [state, setState] = useState({
    page: 0,
    maxPage: 0,
    data: [...comments],
    filtered: false,
    filetString: "",
    text: "Followed"
  });

  const setPage = (page: number) => {
    if (page < 0 || page > state.maxPage) return;

    setState({
      ...state,
      page: page,
    });
  };

  useEffect(() => {
    const data = comments
      .filter((a) => compare(a.name, state.filetString))
      .filter((a) => a.post?.owner?.id === user?.id || !state.filtered);
    const max =
      data.length === 0 ? 0 : Math.floor(data.length / commentPerPage);
    const page = state.page > max ? 0 : state.page;

    setState({
      ...state,
      maxPage: max,
      data: data,
      page: page,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.filetString, state.filtered, comments, user]);

  const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      filetString: event.target.value,
    });
  };

  return (
    <>
      <Controls.TriangleConent>
        <Controls.TriangleConentLeft>
          <CSS.TitleS>Resume your work</CSS.TitleS>
        </Controls.TriangleConentLeft>
        <Controls.TriangleConentRight>
          <Search
            Label="Filter by title"
            Button={true}
            Border={true}
            Width={100}
            FontSize="12"
            IconSize={IconSize.Mini}
            Change={InputChange}
          />
          <DropDown
            LeftIcon={IconType.bell}
            ImageIconSwitch={false}
            Text={state.text}
            Height="120px"
          >
            <CSS.EmElementS onClick={() => {setState({...state,filtered: false,text: "All"});}}>
              <BoxIcon
                IconSize={IconSize.Small}
                IconType={IconType.bell}
                Alt={""}
              />
              All
            </CSS.EmElementS>
            <CSS.EmElementS onClick={() => {setState({...state,filtered: true,text: "My"});}}>
              <BoxIcon
                IconSize={IconSize.Small}
                IconType={IconType.bell}
                Alt={""}
              />
              My
            </CSS.EmElementS>
            <CSS.EmElementS onClick={() => {setState({...state,filtered: false,text: "Followed"});}}>
              <BoxIcon
                IconSize={IconSize.Small}
                IconType={IconType.bell}
                Alt={""}
              />
              Followed
            </CSS.EmElementS>
          </DropDown>
        </Controls.TriangleConentRight>
      </Controls.TriangleConent>
      <div>
        {state.data
          .slice(
            state.page * commentPerPage,
            state.page * commentPerPage + commentPerPage
          )
          .map((element, i) => {
            return (
              <SingleComment Comment={element} key={i} />
            );
          })}
      </div>
      <Paggination
        min={0}
        max={state.maxPage}
        current={state.page}
        change={setPage}
      />
    </>
  );
};
export default ResumeYourWork;
