import IEnComment from "./comment";
import IEnPhoto from "./photo";
import IEnUser from "./user";

export default interface IEnPost {
    id: number;
    userId: number;
    title: string;
    body: string;
    image: string;
    owner?: IEnUser;
    photo?: IEnPhoto;
    comment?: IEnComment[];
}
