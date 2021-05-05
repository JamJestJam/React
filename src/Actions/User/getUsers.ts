import { Dispatch } from "redux";
//entity
import IEnUser from "Entities/user";
//action types
import * as types from "./UserTypes";

const getUsers = (): Promise<IEnUser[]> =>
    ((dispatch: Dispatch) => {
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((users: IEnUser[]) => {
                const map = users.map((prop) => {
                    return {
                        ...prop,
                        shortName:
                            prop.name.length > 18
                                ? prop.name.substring(0, 15) + "..."
                                : prop.name,
                    };
                });

                dispatch({
                    type: types.GET_USERS,
                    users: map,
                });
                
                return map;
            });
    }) as any;

export default getUsers;
