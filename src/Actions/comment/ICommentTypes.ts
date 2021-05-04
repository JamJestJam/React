//entity
import IEnComment from "Entities/comment";

export default interface ICommentTypes {
    GET_COMMENTS: {
        comments: IEnComment[];
    };
}
