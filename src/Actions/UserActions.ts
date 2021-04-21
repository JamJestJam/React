import { Dispatch } from "redux";
import IUserE from "../Entities/user";
import * as userTypes from "./ActionTypes/user/userTypes";

const getUsers = (): Promise<any> =>
    ((dispatch: Dispatch) => {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users: IUserE[]) => {
                dispatch({
                    type: userTypes.GET_USER,
                    users,
                });
            });
    }) as any;

export default getUsers;
