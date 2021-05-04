import { Dispatch } from "redux";
import IEnUser from "entity/user";
import * as types from "./UserTypes";

const getUsers = (): Promise<IEnUser[]> =>
    ((dispatch: Dispatch) => {
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((users: IEnUser[]) => {
                dispatch({
                    type: types.GET_USERS,
                    users: users,
                });
                return users;
            });
    }) as any;

export default getUsers;
