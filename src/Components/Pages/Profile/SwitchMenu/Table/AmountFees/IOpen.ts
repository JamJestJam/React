import { IAmountFeesData } from "./IAmountFees";

export default interface IOpen extends IAmountFeesData {
    handleChange: (e: React.ChangeEvent<any>) => void;
}