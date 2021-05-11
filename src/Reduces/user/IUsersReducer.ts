import IEnUser from "Entities/user";

export default interface IUsersReducer {
  users: IEnUser[];
  user: IEnUser | undefined;
}
