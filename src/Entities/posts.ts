import IEnUsers from "./users";

export default interface IEnPost {
    text: string;
    image: string;
    likes: number;
    link: string;
    tags: string[];
    publishDate: string;
    owner: IEnUsers;
}
