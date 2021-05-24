//interface
import IImage from "../IImage";
export default interface IBoxImage extends IImage {
  background?: string;
  boxShadow?: boolean;
  rounded?: boolean;
  margin?: string;
}
