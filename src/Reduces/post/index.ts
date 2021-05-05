import defaultState from "./default";
import * as types from "Actions/Post/PostTypes";
import IPostTypes from "Actions/Post/IPostTypes";

const postSwitch = (state = defaultState(), action: any) => {
    switch (action.type) {
        case types.GET_POST: {
            const paylod: IPostTypes["GET_POST"] = action;
            return {
                ...state,
                posts: paylod.posts,
            };
        }

        case types.SET_POSTS_LINK:{
            const paylod: IPostTypes["SET_POSTS_LINK"] = action;

            return {
                ...state,
                posts: paylod.posts
            };
        }

        default: {
            return state;
        }
    }
};

export default postSwitch;
