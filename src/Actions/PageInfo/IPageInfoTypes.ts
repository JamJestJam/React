//entity
import IEnPageInfo from "Entities/pageInfo";

export default interface IUserTypes {
  GET_PAGE_INFO: {
    pageInfo: IEnPageInfo;
  };
  GET_FULL_SCREEN: {
    fullScreen: boolean;
  }
}
