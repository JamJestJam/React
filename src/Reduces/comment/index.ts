import defaultState from "./default";
import * as types from "Actions/comment/CommentTypes";
import ICommentTypes from "Actions/comment/ICommentTypes";

const pageInfoSwitch = (state = defaultState(), action: any) => {
    switch (action.type) {
        case types.GET_COMMENTS: {
            const paylod: ICommentTypes["GET_COMMENTS"] = action;

            return {
                ...state,
                comments: paylod.comments,
            };
        }

        case types.SET_COMMENTS_LINK:{
            const paylod: ICommentTypes["SET_COMMENTS_LINK"] = action;

            return {
                ...state,
                comments: paylod.comments
            };
        }

        default: {
            return state;
        }
    }
};

export default pageInfoSwitch;
