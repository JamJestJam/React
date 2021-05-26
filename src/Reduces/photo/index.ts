import defaultState from "./default";
import * as types from "Actions/photo/PhotoTypes";
import IPhotoTypes from "Actions/photo/IPhotoTypes";

const postSwitch = (state = defaultState(), action: any) => {
  switch (action.type) {
    case types.GET_PHOTOS: {
      const paylod: IPhotoTypes["GET_PHOTOS"] = action;
      return {
        ...state,
        photos: paylod.photos,
      };
    }

    default: {
      return state;
    }
  }
};

export default postSwitch;
