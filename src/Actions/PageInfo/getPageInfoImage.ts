import { Dispatch } from "redux";
//entity
import IEnPageInfo from "Entities/pageInfo";
//action type
import * as types from "./PageInfoTypes";

const getPageInfoImage = (
    pageName: string,
    pageTitle: string,
    pageImage: string
): Promise<IEnPageInfo> =>
    ((dispatch: Dispatch) => {
        return dispatch({
            type: types.GET_PAGE_INFO,
            pageInfo: {
                pageImage: pageImage,
                pageTitle: pageTitle,
                pageName: pageName,
                imageIconSwitch: true,
            },
        });
    }) as any;

export default getPageInfoImage;
export type GetPageInfoImage = ReturnType<typeof getPageInfoImage>;
