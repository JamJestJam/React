import { Dispatch } from "redux";
import IEnUser from "../../Entities/user";
import * as userTypes from "./UserTypes";


const getUser = (data: string): Promise<IEnUser[]> =>
    ((dispatch: Dispatch) => {
        return fetch(`https://dummyapi.io/data/api/user/${data}`, {headers: { "app-id": "608301449c50293b96f33b2e" },})
            .then((response) => response.json())
            .then((user: IEnUser) => {
                dispatch({
                    type: userTypes.GET_USER,
                    user: user,
                });
                return user;
            });
    }) as any;

export default getUser;
