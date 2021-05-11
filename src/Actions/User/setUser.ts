import { Dispatch } from "redux";
//entity
import IEnUser from "Entities/user";
//action types
import * as types from "./UserTypes";

const setUser = (
  name: string,
  street: string,
  city: string,
  email: string,
  phone: string
): Promise<IEnUser> =>
  ((dispatch: Dispatch) => {
    dispatch({
      type: types.SET_USER,
      name: name,
      street: street,
      city: city,
      email: email,
      phone: phone,
    });
  }) as any;

export default setUser;
export type SetUser = ReturnType<typeof setUser>;
