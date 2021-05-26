import { combineReducers } from "redux";
import user from "./user";
import pageInfo from "./pageInfo";
import posts from "./post";
import comments from "./comment";
import photos from "./photo"

export default combineReducers({
  user,
  pageInfo,
  posts,
  comments,
  photos
});
