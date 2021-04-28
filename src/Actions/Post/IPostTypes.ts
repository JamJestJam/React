import IEnPost from '../../Entities/posts';

export default interface IPostTypes {
  GET_POST: {
    posts: IEnPost;
  };
}
