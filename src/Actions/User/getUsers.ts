import { Dispatch } from "redux";
import IEnUser from "../../Entities/user";
import * as userTypes from "./UserTypes";

const getUsers = (): Promise<IEnUser[]> =>
    ((dispatch: Dispatch) => {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users: IEnUser[]) => {
                dispatch({
                    type: userTypes.GET_USERS,
                    users,
                });
            });
    }) as any;

export default getUsers;
