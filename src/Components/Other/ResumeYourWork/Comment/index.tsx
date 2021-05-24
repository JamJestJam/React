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
  const user = props.comment?.post?.owner;
  return (
    <CSS.ContetS>
      <CSS.TitleS>{props.comment.name}</CSS.TitleS>
      <CSS.BodyS>{props.comment.body}</CSS.BodyS>
      <CSS.BottomS>
        <BoxImage
          imageName={user?.photo?.url || ""}
          alt=""
          maxWidth={20}
          maxHeight={20}
          rounded={true}
          margin="0 5px 0 0"
        />
        <div>{user?.name || ""}</div>
        <CSS.MarginBoxS>•</CSS.MarginBoxS>
        <Icon iconType={IconType.book} iconSize={IconSize.mini} alt="" />
        <div>Group norms</div>
        <CSS.MarginBoxS>•</CSS.MarginBoxS>
        <div>Last update 13 days ago</div>
      </CSS.BottomS>
    </CSS.ContetS>
  );
};

export default SingleComment;
