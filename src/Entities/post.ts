import IEnUser from "./user";

export default interface IEnPost {
    id: number;
    userId: number;
    title: string;
    body: string;
    image: string;
    owner?: IEnUser;
}
