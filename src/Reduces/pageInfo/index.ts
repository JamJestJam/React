import defaultState from "./default";
import * as types from "Actions/PageInfo/PageInfoTypes";
import IPageInfoTypes from "Actions/PageInfo/IPageInfoTypes";

const pageInfoSwitch = (state = defaultState(), action: any) => {
  switch (action.type) {
    case types.GET_PAGE_INFO: {
      const paylod: IPageInfoTypes["GET_PAGE_INFO"] = action;
      if (paylod.pageInfo.fullScreen === null)
        paylod.pageInfo.fullScreen = state.pageInfo.fullScreen;
      return {
        ...state,
        pageInfo: paylod.pageInfo,
      };
    }

    case types.GET_FULL_SCREEN: {
      const paylod: IPageInfoTypes["GET_FULL_SCREEN"] = action;
      return {
        ...state,
        pageInfo: { ...state.pageInfo, fullScreen: paylod.fullScreen },
      };
    }

    default: {
      return state;
    }
  }
};

export default pageInfoSwitch;
