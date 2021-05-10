import React, { FC } from "react";
//style
import * as CSS from "./css";
//interface
import IComment from "./IComment";

const SingleComment: FC<IComment> = (props) => {
    return (
        <CSS.ContetS>
            <CSS.TitleS>{props.Title}</CSS.TitleS>
            <div>{props.Body}</div>
        </CSS.ContetS>
    );
};

export default SingleComment;
