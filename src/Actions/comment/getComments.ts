import { Dispatch } from "redux";
//entity
import IEnComment from "Entities/comment";
//action types
import * as types from "./CommentTypes";

const getComments = (): Promise<IEnComment[]> =>
  ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments: IEnComment[]) => {
        dispatch({
          type: types.GET_COMMENTS,
          comments: comments,
        });
        return comments;
      });
  }) as any;

export default getComments;
export type GetComments = ReturnType<typeof getComments>;
