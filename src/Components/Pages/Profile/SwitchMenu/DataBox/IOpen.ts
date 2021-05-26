//interface
import IDataBox, { IDataBoxInfo } from "./IDataBox";

export default interface IOpen extends IDataBox {
    handleChange: (e: React.ChangeEvent<any>) => void;
    setValues: (e: IDataBoxInfo) => void;
}