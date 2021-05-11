import { Dispatch } from "redux";
//entity
import IEnPost from "Entities/post";
//action types
import * as types from "./PostTypes";

const getPosts = (): Promise<IEnPost[]> =>
  ((dispatch: Dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((posts: IEnPost) => {
        dispatch({
          type: types.GET_POST,
          posts: posts,
        });
        return posts;
      });
  }) as any;

export default getPosts;
export type GetPost = ReturnType<typeof getPosts>;
