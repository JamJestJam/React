import defaultState from "./default";
import * as types from "Actions/User/UserTypes";
import IUserTypes from "Actions/User/IUserTypes";

const userSwitch = (state = defaultState(), action: any) => {
  switch (action.type) {
    case types.GET_USERS: {
      const paylod: IUserTypes["GET_USERS"] = action;
      return {
        ...state,
        users: paylod.users,
      };
    }

    case types.GET_USER: {
      const paylod: IUserTypes["GET_USER"] = action;
      return {
        ...state,
        user: paylod.user,
      };
    }

    case types.SET_USERS_LINK: {
      const paylod: IUserTypes["SET_USERS_LINK"] = action;

      return {
        ...state,
        users: paylod.users,
      };
    }

    case types.SET_USER: {
      const paylod: IUserTypes["SET_USER"] = action;

      const user = state.user;
      if (user) {
        user.name = paylod.name;
        user.address.street = paylod.street;
        user.address.city = paylod.city;
        user.phone = paylod.phone;
        user.email = paylod.email;
      }
      
      return {
        ...state,
        user: user,
      };
    }

    default: {
      return state;
    }
  }
};

export default userSwitch;
