import IEnPost from '../../Entities/post';

export default interface IPostTypes {
  GET_POST: {
    posts: IEnPost;
  };
}
