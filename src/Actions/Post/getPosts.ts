import { Dispatch } from "redux";
import IEnPost from "../../Entities/posts";
import { dummyapi } from "../app_key";
import * as types from "./PostTypes";

interface IDownloadData {
    data: IEnPost[];
    limit: number;
    offset: number;
    page: number;
    total: number;
}

const getPost = (page: Number): Promise<IEnPost[]> =>
    ((dispatch: Dispatch) => {
        return fetch(
            `https://dummyapi.io/data/api/post?limit=50&page=${page}`,
            {
                headers: { "app-id": dummyapi },
            }
        )
            .then((response) => response.json())
            .then((posts: IDownloadData) => {
                dispatch({
                    type: types.GET_POST,
                    posts: posts.data,
                });
                return posts.data;
            });
    }) as any;

export default getPost;
