import defaultState from "./default";
import * as types from "../../Actions/comment/CommentTypes";
import ICommentTypes from "../../Actions/comment/ICommentTypes";

const pageInfoSwitch = (state = defaultState(), action: any) => {
    switch (action.type) {
        case types.GET_COMMENTS: {
            const paylod: ICommentTypes["GET_COMMENTS"] = action;
            return {
                ...state,
                comments: state.comments.concat(paylod.comments),
            };
        }

        default: {
            return state;
        }
    }
};

export default pageInfoSwitch;
