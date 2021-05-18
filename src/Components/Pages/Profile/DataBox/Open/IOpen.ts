//interface
import IDataBox, { IDataBoxInfo } from "../IDataBox";

export default interface IClose extends IDataBox {
  close: () => void;
  save: (data: IDataBoxInfo) => void;
}
