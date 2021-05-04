import { Dispatch } from "redux";
import IEnUser from "entity/user";
import * as types from "./UserTypes";

const getUser = (user: IEnUser): Promise<IEnUser[]> =>
    ((dispatch: Dispatch) => {
        return dispatch({
            type: types.GET_USER,
            user: user,
        });
    }) as any;

export default getUser;
