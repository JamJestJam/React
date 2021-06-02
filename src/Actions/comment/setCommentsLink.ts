import { Dispatch } from "redux";
//entity
import IEnComment from "Entities/comment";
import IEnPost from "Entities/post";
//action types
import * as types from "./CommentTypes";

const setCommentsLink = (
  comments: IEnComment[],
  posts: IEnPost[]
): Promise<IEnComment[]> =>
  ((dispatch: Dispatch) => {
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      comment.post = posts.find((a) => a.id === comment.postId);
    }

    dispatch({
      type: types.SET_COMMENTS_LINK,
      comments: comments,
    });

    return comments;
  }) as any;

export default setCommentsLink;
export type SetCommentsLink = ReturnType<typeof setCommentsLink>;
