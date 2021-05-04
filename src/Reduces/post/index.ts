import defaultState from "./default";
import * as types from "actions/Post/PostTypes";
import IUserTypes from "actions/Post/IPostTypes";

const postSwitch = (state = defaultState(), action: any) => {
    switch (action.type) {
        case types.GET_POST: {
            const paylod: IUserTypes["GET_POST"] = action;
            return {
                ...state,
                posts: state.posts.concat(paylod.posts),
            };
        }

        default: {
            return state;
        }
    }
};

export default postSwitch;
