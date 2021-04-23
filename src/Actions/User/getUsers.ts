import { Dispatch } from "redux";
import IEnUsers from "../../Entities/users";
import * as userTypes from "./UserTypes";

interface IDownloadData{
    data: IEnUsers[];
    limit: number;
    offset: number;
    page: number;
    total: number;
}

const getUsers = (): Promise<IEnUsers[]> =>
    ((dispatch: Dispatch) => {
        return fetch(`https://dummyapi.io/data/api/user`, { headers: { 'app-id': '608301449c50293b96f33b2e' } })
            .then((response) => response.json())
            .then((users: IDownloadData) => {
                dispatch({
                    type: userTypes.GET_USERS,
                    users: users.data,
                });
                return users.data;
            });
    }) as any;

export default getUsers;