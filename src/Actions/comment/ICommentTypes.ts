//entity
import IEnComment from "Entities/comment";

export default interface ICommentTypes {
  GET_COMMENTS: {
    comments: IEnComment[];
  };
  SET_COMMENTS_LINK: {
    comments: IEnComment[];
  };
}
