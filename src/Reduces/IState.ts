import ICommentReducer from "./comment/ICommentReducer";
import IPageInfoReducer from "./pageInfo/IPageInfoReducer";
import IPostReducer from "./post/IPostReducer";
import IUsersReducer from "./users/IUsersReducer";

export default interface IState {
    user: IUsersReducer;
    pageInfo: IPageInfoReducer;
    posts: IPostReducer;
    comments: ICommentReducer;
}
