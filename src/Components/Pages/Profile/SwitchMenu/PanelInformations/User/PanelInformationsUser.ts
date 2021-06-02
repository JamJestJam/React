import IEnUser from "Entities/user";
export default interface IPanelInformationsUser {
    user: IEnUser | undefined;
    handleChange?: (e: React.ChangeEvent<any>) => void;
    id: number;
}