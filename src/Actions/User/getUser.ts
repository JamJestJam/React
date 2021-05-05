import { Dispatch } from "redux";
//entity
import IEnUser from "Entities/user";
//action types
import * as types from "./UserTypes";

const getUser = (user: IEnUser): Promise<IEnUser[]> =>
    ((dispatch: Dispatch) => {
        return dispatch({
            type: types.GET_USER,
            user: user,
        });
    }) as any;

export default getUser;
