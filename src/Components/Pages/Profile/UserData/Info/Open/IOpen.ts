//interface
import IInfo, { userInfo } from "../IInfo";

export default interface IOpen extends IInfo {
  save: (data: userInfo) => void;
  close: () => void;
}
