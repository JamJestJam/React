import { IconSize } from "./IconSize";
import { IconType } from "./IconType";

export default interface IIcon {
    Bordered?: boolean;
    IconType: IconType;
    IconSize: IconSize;
    Alt: string;
}
