import IPageInfoReducer from "./pageInfo/IPageInfoReducer";
import IUsersReducer from "./users/IUsersReducer";

export default interface IState {
    user: IUsersReducer;
    pageInfo: IPageInfoReducer;
}
