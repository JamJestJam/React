//entity
import IEnPost from "Entities/post";

export default interface IPostTypes {
    GET_POST: {
        posts: IEnPost[];
    };
    SET_POSTS_LINK: {
        posts: IEnPost[];
    };
}
