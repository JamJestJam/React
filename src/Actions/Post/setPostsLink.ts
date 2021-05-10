import { Dispatch } from "redux";
//entity
import IEnPhoto from "Entities/photo";
import IEnPost from "Entities/post";
import IEnUser from "Entities/user";
import IEnComment from "Entities/comment";
//types
import * as types from "./PostTypes";

const setPostsLink = (posts: IEnPost[], photos: IEnPhoto[], users: IEnUser[], comments: IEnComment[]): Promise<IEnPost[]> =>
    ((dispatch: Dispatch) => {
        for(let i=0;i<posts.length;i++){
            const post = posts[i];
            post.owner = users.find(a=>a.id === post.userId);
            post.comment = comments.filter(a=>a.postId === post.id);
            post.photo = photos.find(a=>a.id === post.id);
        }

        dispatch({
            type: types.SET_POSTS_LINK,
            posts: posts,
        });

        return posts;
    }) as any;

export default setPostsLink;
export type SetPostsLink = ReturnType<typeof setPostsLink>;