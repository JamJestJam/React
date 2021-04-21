import IUserE from '../../../Entities/user';
import { GET_USER } from './userTypes';

export default interface IUserTypes {
    GET_USER: {
        users: IUserE[];
    }
} 