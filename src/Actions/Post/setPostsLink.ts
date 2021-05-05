import { Dispatch } from "redux";
//entity
import IEnPhoto from "Entities/photo";
import IEnPost from "Entities/post";
import IEnUser from "Entities/user";
import IEnComment from "Entities/comment";
//types
import * as types from "./PostTypes";

const setPostsLink = (posts: IEnPost[], photos: IEnPhoto[], owners: IEnUser[], comments: IEnComment[]): Promise<IEnPost[]> =>
    ((dispatch: Dispatch) => {
        const map: IEnPost[] = posts.map((post) => {
            return {
                ...post,
                photo: photos.find((a) => a.id === post.id),
                owner: owners.find((a) => a.id === post.id),
                comment: comments.filter((a) => a.id === post.id),
            };
        });

        dispatch({
            type: types.SET_POSTS_LINK,
            posts: map,
        });

        return map;
    }) as any;

export default setPostsLink;
