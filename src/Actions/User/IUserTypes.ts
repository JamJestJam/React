//entity
import IEnUser from "Entities/user";

export default interface IUserTypes {
  GET_USERS: {
    users: IEnUser[];
  };
  GET_USER: {
    user: IEnUser;
  };
  SET_USERS_LINK: {
    users: IEnUser[];
  };
  SET_USER: {
    name: string;
    street: string;
    city: string;
    email: string;
    phone: string;
  };
}
