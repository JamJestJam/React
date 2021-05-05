import { Dispatch } from "redux";
//entity
import IEnUser from "Entities/user";
import IEnPhoto from "Entities/photo";
import IEnComment from "Entities/comment";
import IEnPost from "Entities/post";
//action types
import * as types from "./UserTypes";

const setUsersLink = (users: IEnUser[], photos:IEnPhoto[], posts:IEnPost[], comments:IEnComment[]): Promise<IEnUser[]> =>
    ((dispatch: Dispatch) => {
        const map:IEnUser[] = users.map(user=>{
            return ({
                ...user,
                photo: photos.find(a=>a.id === user.id),
                posts: posts.filter(a=>a.userId === user.id),
                comments: comments.filter(a=>a.email === user.email)
            });
        })

        dispatch({
            type: types.SET_USERS_LINK,
            users: map
        });

        return map;
    }) as any;

export default setUsersLink;