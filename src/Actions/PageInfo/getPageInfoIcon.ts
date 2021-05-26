import { GlobalStyles } from './../../StyledHelpers/GlobalStyles';
import { Dispatch } from "redux";
//data
import { IconType } from "Components/Common/Icon/IconType";
//entity
import IEnPageInfo from "Entities/pageInfo";
//action type
import * as types from "./PageInfoTypes";

const getPageInfoIcon = (
  pageName: string,
  pageTitle: string,
  pageIcon: IconType,
  fullScreen: boolean | undefined = undefined
): Promise<IEnPageInfo> =>
  ((dispatch: Dispatch) => {
    return dispatch({
      type: types.GET_PAGE_INFO,
      pageInfo: {
        pageIcon: pageIcon,
        pageTitle: pageTitle,
        pageName: pageName,
        imageIconSwitch: false,
        fullScreen: fullScreen
      },
    });
  }) as any;

export default getPageInfoIcon;
export type GetPageInfoIcon = ReturnType<typeof getPageInfoIcon>;
