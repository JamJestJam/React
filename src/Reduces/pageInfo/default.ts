import { IconType } from "../../Components/Common/Icon/IconType";
import IPageInfoReducer from "./IPageInfoReducer";

const defaultState = (): IPageInfoReducer => ({
    pageInfo: {
        pageIcon: IconType.house2,
        pageName: "default",
        pageTitle: "default",
    },
});

export default defaultState;
