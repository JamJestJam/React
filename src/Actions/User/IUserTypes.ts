import IEnUser from "../../Entities/user";

export default interface IUserTypes {
    GET_USERS: {
        users: IEnUser;
    };
}
