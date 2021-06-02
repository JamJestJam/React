import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
//Components
import DropDown from "Components/Common/DropDown";
import InputLabel from "Components/Common/Input/LabelInput";
import SingleComment from "./Comment";
import BoxIcon from "Components/Common/Icon/Boxing";
import Icon from "Components/Common/Icon";
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
import IResumeYourWork from "./IResumeYourWork";
import { colors } from "StyledHelpers/Colors";

const commentPerPage = 8;

const ResumeYourWork: FC<IResumeYourWork> = (props) => {
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
    text: "Followed",
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

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <InputLabel
            label="Filter by title"
            button={true}
            border={true}
            width={100}
            fontSize="12"
            iconSize={IconSize.mini}
            change={inputChange}
          />
          <DropDown
            leftIcon={IconType.broadcast}
            imageIconSwitch={false}
            Text={state.text}
            height="120px"
          >
            <CSS.EmElementS
              onClick={() => {
                setState({ ...state, filtered: false, text: "All" });
              }}
            >
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.broadcast}
                alt={""}
              />
              All
            </CSS.EmElementS>
            <CSS.EmElementS
              onClick={() => {
                setState({ ...state, filtered: true, text: "My" });
              }}
            >
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.broadcast}
                alt={""}
              />
              My
            </CSS.EmElementS>
            <CSS.EmElementS
              onClick={() => {
                setState({ ...state, filtered: false, text: "Followed" });
              }}
            >
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.broadcast}
                alt={""}
              />
              Followed
            </CSS.EmElementS>
          </DropDown>
        </Controls.TriangleConentRight>
      </Controls.TriangleConent>
      {props.icons ? (
        <CSS.ContentS>
          <CSS.ElementS bgColor="#eaecf5" color={colors.BlueFont}>All</CSS.ElementS>
          <CSS.ElementS bgColor="#d0e6cc" color="#459a1d" >
            <Icon
              iconSize={IconSize.small}
              iconType={IconType.entities}
              alt={""}
            />
            SAS
          </CSS.ElementS>
          <CSS.ElementS bgColor="#eef6fa" color="#499fd1" >
            <Icon
              iconSize={IconSize.small}
              iconType={IconType.entities}
              alt={""}
            />
            SARL
          </CSS.ElementS>
          <CSS.ElementS bgColor="#f2e6c3" color="#d6ae34" >
            <Icon
              iconSize={IconSize.small}
              iconType={IconType.entities}
              alt={""}
            />
            Secondary business
          </CSS.ElementS>
          <CSS.ElementS bgColor="#cdcdcd" color="#62687b" >
            <Icon
              iconSize={IconSize.small}
              iconType={IconType.diagram}
              alt={""}
            />
            Communities
          </CSS.ElementS>
          <CSS.ElementS bgColor="#e9e9e9" color="#73798a" >
            <Icon
              iconSize={IconSize.small}
              iconType={IconType.image_editing}
              alt={""}
            />
            POA
          </CSS.ElementS>
          <CSS.ElementS bgColor="#ffffff" color="#777c8e" >
            <Icon
              iconSize={IconSize.small}
              iconType={IconType.calendar}
              alt={""}
            />
            Survey
          </CSS.ElementS>
          <CSS.ElementS bgColor="#ffffff" color="#777c8e" >...</CSS.ElementS>
        </CSS.ContentS>
      ) : (
        <></>
      )}
      <div>
        {state.data
          .slice(
            state.page * commentPerPage,
            state.page * commentPerPage + commentPerPage
          )
          .map((element, i) => {
            return <SingleComment comment={element} key={i} />;
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
