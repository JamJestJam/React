import IEnUser from '../../Entities/user';
import IEnUsers from '../../Entities/users';

export default interface IUserTypes {
  GET_USERS: {
    users: IEnUsers;
  };
  GET_USER: {
    user: IEnUser;
  };
}
