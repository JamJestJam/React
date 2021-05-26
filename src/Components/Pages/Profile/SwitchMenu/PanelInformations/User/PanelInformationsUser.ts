import IEnUser from "Entities/user";
//interaface
import IPanelInframation from "../IPanelInformation";

export default interface IPanelInformationsUser {
    user: IEnUser | undefined;
    handleChange?: (e: React.ChangeEvent<any>) => void;
    id: number;
}