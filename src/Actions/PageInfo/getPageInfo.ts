import { Dispatch } from "redux";
//data
import { IconType } from "Components/Common/Icon/IconType";
//entity
import IEnPageInfo from "Entities/pageInfo";
//action type
import * as types from "./PageInfoTypes";

const getPageInfo = (
    pageName: string,
    pageTitle: string,
    pageImage: IconType
): Promise<IEnPageInfo> =>
    ((dispatch: Dispatch) => {
        return dispatch({
            type: types.GET_PAGE_INFO,
            pageInfo: {
                pageIcon: pageImage,
                pageTitle: pageTitle,
                pageName: pageName,
            },
        });
    }) as any;

export default getPageInfo;
