import IEnUser from '../../Entities/user';
import IEnUsers from '../../Entities/users';

export default interface IUsersReducer {
  users: IEnUsers[];
  user: IEnUser | undefined;
}
