import IPanelInframation, { IPanelInformationData } from "./IPanelInformation";

export default interface IOpen extends IPanelInformationData {
    handleChange: (e: React.ChangeEvent<any>) => void;
    setValues: (e: IPanelInframation) => void;
}