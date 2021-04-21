import defaultState from "./state";
import * as types from "../../Actions/User/UserTypes";
import IUserTypes from "../../Actions/User/IUserTypes";


const userSwitch = (state = defaultState(), action: any) => {
    switch (action.type) {
        case types.GET_USERS: {
            const paylod: IUserTypes["GET_USERS"] = action;
            return {
                ...state,
                users: paylod.users,
            };
        }

        case types.GET_LOGIN_USER: {
            const paylod: IUserTypes["GET_LOGIN_USER"] = action;
            return {
                ...state,
                user: paylod
            };
        }

        default: {
            return state;
        }
    }
};

export default userSwitch;
