import { Dispatch } from "redux";
import * as userTypes from "./UserTypes";

const getLoginUser = (data: number): Promise<number> =>((dispatch: Dispatch) => {
        return dispatch({
            type: userTypes.GET_LOGIN_USER,
            Login: data
        });
    }) as any;

export default getLoginUser;