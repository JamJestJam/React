import { combineReducers } from "redux";
import user from "./users";
import pageInfo from "./pageInfo";
import posts from "./post";

export default combineReducers({
    user,
    pageInfo,
    posts
});
