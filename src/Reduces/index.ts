import { combineReducers } from "redux";
import user from "./users";
import pageInfo from "./pageInfo";
import posts from "./post";
import comments from "./comment";

export default combineReducers({
    user,
    pageInfo,
    posts,
    comments,
});
