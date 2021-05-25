import { IProposalsData } from "./IProposals";

export default interface IOpen extends IProposalsData {
    handleChange: (e: React.ChangeEvent<any>) => void;
}