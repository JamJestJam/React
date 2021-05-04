import IEnUser from "entity/user";

export default interface IUsersReducer {
    users: IEnUser[];
    user: IEnUser | undefined;
}
