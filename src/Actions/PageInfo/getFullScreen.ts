import { Dispatch } from "redux";
//entity
import IEnPageInfo from "Entities/pageInfo";
//action type
import * as types from "./PageInfoTypes";

const getFullScreen = (fullScreen: boolean): Promise<IEnPageInfo> =>
  ((dispatch: Dispatch) => {
    return dispatch({
      type: types.GET_FULL_SCREEN,
      fullScreen: fullScreen
    });
  }) as any;

export default getFullScreen;
export type GetFullScreen = ReturnType<typeof getFullScreen>;
