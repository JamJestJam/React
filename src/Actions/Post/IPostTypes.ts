import IEnPost from "entity/post";

export default interface IPostTypes {
    GET_POST: {
        posts: IEnPost;
    };
}
