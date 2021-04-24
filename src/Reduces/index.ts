import { combineReducers } from "redux";
import user from "./users";
import pageInfo from "./pageInfo";

export default combineReducers({
    user,
    pageInfo,
});
