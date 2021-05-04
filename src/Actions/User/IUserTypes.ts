import IEnUser from "entity/user";

export default interface IUserTypes {
    GET_USERS: {
        users: IEnUser;
    };
    GET_USER: {
        user: IEnUser;
    };
}
