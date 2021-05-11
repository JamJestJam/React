import IEnPhoto from "Entities/photo";

export default interface IPhotoTypes {
  GET_PHOTOS: {
    photos: IEnPhoto;
  };
}
