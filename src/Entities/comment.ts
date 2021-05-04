import IEnUser from './user';

export default interface IEnComment {
  id: number;
  postID: number;
  name: string;
  body: string;
  email: string;
}
