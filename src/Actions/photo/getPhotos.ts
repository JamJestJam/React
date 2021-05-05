import { Dispatch } from "redux";
//entity
import IEnPhoto from "Entities/photo";
//action type
import * as types from "./PhotoTypes";

const getPhotos = (): Promise<IEnPhoto[]> =>
((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((photos: IEnPhoto[]) => {
            dispatch({
                type: types.GET_PHOTOS,
                photos: photos,
            });
            return photos;
        });
}) as any;

export default getPhotos;
