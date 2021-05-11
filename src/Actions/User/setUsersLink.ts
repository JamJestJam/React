import { Dispatch } from "redux";
//entity
import IEnUser from "Entities/user";
import IEnPhoto from "Entities/photo";
import IEnComment from "Entities/comment";
import IEnPost from "Entities/post";
//action types
import * as types from "./UserTypes";

const setUsersLink = (
  users: IEnUser[],
  photos: IEnPhoto[],
  posts: IEnPost[],
  comments: IEnComment[]
): Promise<IEnUser[]> =>
  ((dispatch: Dispatch) => {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      user.posts = posts.filter((a) => a.userId === user.id);
      user.photo = photos.find((a) => a.id === user.id);
    }

    dispatch({
      type: types.SET_USERS_LINK,
      users: users,
    });

    return users;
  }) as any;

export default setUsersLink;
export type SetUsersLink = ReturnType<typeof setUsersLink>;
