import IEnPost from "./post";
import IEnUser from "./user";

export default interface IEnComment {
  id: number;
  postId: number;
  name: string;
  body: string;
  email: string;
  post?: IEnPost;
}
