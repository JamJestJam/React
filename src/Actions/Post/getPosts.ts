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

const getPost = (): Promise<IEnPost[]> =>
    ((dispatch: Dispatch) => {
        return fetch(`https://dummyapi.io/data/api/post`, {
            headers: { "app-id": dummyapi },
        })
            .then((response) => response.json())
            .then((users: IDownloadData) => {
                dispatch({
                    type: types.GET_POST,
                    posts: users.data,
                });
                return users.data;
            });
    }) as any;

export default getPost;
