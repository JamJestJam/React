import { Dispatch } from "redux";
//entity
import IEnPageInfo from "Entities/pageInfo";
//action type
import * as types from "./PageInfoTypes";

const getPageInfoImage = (
  pageName: string,
  pageTitle: string,
  pageImage: string,
  fullScreen: boolean = false
): Promise<IEnPageInfo> =>
  ((dispatch: Dispatch) => {
    return dispatch({
      type: types.GET_PAGE_INFO,
      pageInfo: {
        pageImage: pageImage,
        pageTitle: pageTitle,
        pageName: pageName,
        imageIconSwitch: true,
        fullScreen: fullScreen,
      },
    });
  }) as any;

export default getPageInfoImage;
export type GetPageInfoImage = ReturnType<typeof getPageInfoImage>;
