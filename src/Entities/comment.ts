import IEnUsers from "./users";

export default interface IEnComment {
    id: string;
    postID: string;
    message: string;
    publishDate: string;
    owner: IEnUsers;
}
