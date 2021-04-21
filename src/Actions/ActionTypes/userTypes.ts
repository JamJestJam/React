import IEnUser from "../../Entities/user";

export const GET_USERS = "GET_USERS";
export const GET_LOGIN_USER = "GET_LOGIN_USER";

export default interface IUserTypes {
    GET_USERS: {
        users: IEnUser;
    };
}
