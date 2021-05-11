import { IconType } from "Components/Common/Icon/IconType";

export default interface IDdContentItem {
  link: string;
  itemName: string;
  icon?: IconType;
  image?: string;
  imageIconSwitch: boolean;
}
