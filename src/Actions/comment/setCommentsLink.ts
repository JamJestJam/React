import { Dispatch } from "redux";
//entity
import IEnUser from "Entities/user";
import IEnComment from "Entities/comment";
import IEnPost from "Entities/post";
//action types
import * as types from "./CommentTypes";

const setCommentsLink = (comments: IEnComment[], posts:IEnPost[], owners:IEnUser[]): Promise<IEnUser[]> =>
    ((dispatch: Dispatch) => {
        console.log(owners[0].email);
        console.log(comments[0].email);

        const map:IEnComment[] = comments.map(comment=>{
            return ({
                ...comment,
                post: posts.find(a=>a.id === comment.postId),
                owner: owners.find(a=>a.email === comment.email)
            });
        })

        dispatch({
            type: types.SET_COMMENTS_LINK,
            users: map
        });

        return map;
    }) as any;

export default setCommentsLink;