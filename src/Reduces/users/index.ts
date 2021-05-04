import defaultState from "./default";
import * as types from "actions/User/UserTypes";
import IUserTypes from "actions/User/IUserTypes";

const userSwitch = (state = defaultState(), action: any) => {
    switch (action.type) {
        case types.GET_USERS: {
            const paylod: IUserTypes["GET_USERS"] = action;
            return {
                ...state,
                users: paylod.users,
            };
        }

        case types.GET_USER: {
            const paylod: IUserTypes["GET_USER"] = action;
            return {
                ...state,
                user: paylod.user,
            };
        }

        default: {
            return state;
        }
    }
};

export default userSwitch;
