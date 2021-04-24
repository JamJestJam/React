import { Dispatch } from "redux";
import { IconType } from "../../Components/Common/Icon/IconType";
import IEnPageInfo from "../../Entities/pageInfo";
import * as pageInfoTypes from "./PageInfoTypes";

const getPageInfo = (
    pageName: string,
    pageTitle: string,
    pageImage: IconType
): Promise<IEnPageInfo> =>
    ((dispatch: Dispatch) => {
        return dispatch({
            type: pageInfoTypes.GET_PAGE_INFO,
            pageInfo: {
                pageIcon: pageImage,
                pageTitle: pageTitle,
                pageName: pageName,
            },
        });
    }) as any;

export default getPageInfo;
