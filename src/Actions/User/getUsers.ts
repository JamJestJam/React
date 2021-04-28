import { Dispatch } from "redux";
import IEnUsers from "../../Entities/users";
import { dummyapi } from "../app_key";
import * as types from "./UserTypes";

interface IDownloadData {
    data: IEnUsers[];
    limit: number;
    offset: number;
    page: number;
    total: number;
}

const getUsers = (page: number): Promise<IEnUsers[]> =>
    ((dispatch: Dispatch) => {
        return fetch(
            `https://dummyapi.io/data/api/user?limit=10&page=${page}`,
            {
                headers: { "app-id": dummyapi },
            }
        )
            .then((response) => response.json())
            .then((users: IDownloadData) => {
                dispatch({
                    type: types.GET_USERS,
                    users: users.data,
                });
                return users.data;
            });
    }) as any;

export default getUsers;
