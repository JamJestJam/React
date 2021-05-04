import IImage from "../IImage";

export default interface IBoxImage extends IImage {
    Background?: string;
    BoxShadow?: boolean;
    Rounded?: boolean;
    Margin?: string;
}
