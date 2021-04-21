import defaultState from ".";
import IUserTypes from "../../Actions/ActionTypes/user/IUserTypes";
import * as types from "../../Actions/ActionTypes/user/userTypes";

const userSwitch = (state = defaultState(), action: any) => {
    switch (action.type) {
        case types.GET_USER: {
            const paylod: IUserTypes["GET_USER"] = action;
            return {
                ...state,
                users: paylod.users
            }
        }

        default: {
            return state;
        }
    }
};

export default userSwitch;
