import { Dispatch } from "redux";
import IEnUser from "../../Entities/user";
import { dummyapi } from "../app_key";
import * as types from "./UserTypes";

const getUser = (data: string): Promise<IEnUser[]> =>
    ((dispatch: Dispatch) => {
        return fetch(`https://dummyapi.io/data/api/user/${data}`, {
            headers: { "app-id": dummyapi },
        })
            .then((response) => response.json())
            .then((user: IEnUser) => {
                dispatch({
                    type: types.GET_USER,
                    user: user,
                });
                return user;
            });
    }) as any;

export default getUser;
