import IPageInfoReducer from "./IPageInfoReducer";

const defaultState = (): IPageInfoReducer => ({
  pageInfo: {
    pageIcon: undefined,
    pageImage: undefined,
    imageIconSwitch: true,
    pageName: "default",
    pageTitle: "default",
    fullScreen: undefined
  },
});

export default defaultState;
