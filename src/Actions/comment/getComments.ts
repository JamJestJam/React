import { Dispatch } from 'redux';
import IEnComment from '../../Entities/comment';
import comment from '../../Reduces/comment';
import { dummyapi } from '../app_key';
import * as types from './CommentTypes';

interface IDownloadData {
  data: IEnComment[];
  limit: number;
  offset: number;
  page: number;
  total: number;
}

const getPost = (page: Number, post: string): Promise<IEnComment[]> =>
  ((dispatch: Dispatch) => {
    return fetch(
      `https://dummyapi.io/data/api/post/${post}/comment?limit=50&page=${page}`,
      {
        headers: { 'app-id': dummyapi },
      }
    )
      .then((response) => response.json())
      .then((comments: IDownloadData) => {
        dispatch({
          type: types.GET_COMMENTS,
          comments: comments.data.map((comment) => {
            comment.postID = post;
            return comment;
          }),
        });
        return comments.data;
      });
  }) as any;

export default getPost;
