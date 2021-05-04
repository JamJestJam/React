import defaultState from "./default";
import * as types from "Actions/PageInfo/PageInfoTypes";
import IPageInfoTypes from "Actions/PageInfo/IPageInfoTypes";

const pageInfoSwitch = (state = defaultState(), action: any) => {
    switch (action.type) {
        case types.GET_PAGE_INFO: {
            const paylod: IPageInfoTypes["GET_PAGE_INFO"] = action;
            return {
                ...state,
                pageInfo: paylod.pageInfo,
            };
        }

        default: {
            return state;
        }
    }
};

export default pageInfoSwitch;
