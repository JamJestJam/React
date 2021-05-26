import { IInternalData } from "./IInternalReviews";

export default interface IOpen extends IInternalData {
    handleChange: (e: React.ChangeEvent<any>) => void;
}