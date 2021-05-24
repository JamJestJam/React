//data
import { IconSize } from "./IconSize";
import { IconType } from "./IconType";

export default interface IIcon {
  bordered?: boolean;
  iconType: IconType;
  iconSize: IconSize;
  alt: string;
}
