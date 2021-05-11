import React, { FC } from "react";
//style
import * as CSS from "./css";
//components
import BoxImage from "Components/Common/Image/Boxing";
import Icon from "Components/Common/Icon";
//data
import { IconType } from "Components/Common/Icon/IconType";
import { IconSize } from "Components/Common/Icon/IconSize";
//interface
import IComment from "./IComment";

const SingleComment: FC<IComment> = (props) => {
  const user = props.Comment?.post?.owner;
  return (
    <CSS.ContetS>
      <CSS.TitleS>{props.Comment.name}</CSS.TitleS>
      <CSS.BodyS>{props.Comment.body}</CSS.BodyS>
      <CSS.BottomS>
        <BoxImage ImageName={user?.photo?.url || ""} Alt="" MaxWidth={20} MaxHeight={20} Rounded={true} Margin="0 5px 0 0"/>
        <div>{user?.name || ""}</div>
        <CSS.MarginBoxS>•</CSS.MarginBoxS>
        <Icon IconType={IconType.bell} IconSize={IconSize.Mini} Alt="" />
        <div>Real estate contracts</div>
        <CSS.MarginBoxS>•</CSS.MarginBoxS>
        <div>Last update 13 days ago by Ervin Howell</div>
      </CSS.BottomS>
    </CSS.ContetS>
  );
};

export default SingleComment;
