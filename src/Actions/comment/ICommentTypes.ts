import IEnComment from "entity/comment";

export default interface ICommentTypes {
    GET_COMMENTS: {
        comments: IEnComment[];
    };
}
