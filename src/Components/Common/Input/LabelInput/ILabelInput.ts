//data
import { IconType } from "Components/Common/Icon/IconType";
import { IconSize } from "Components/Common/Icon/IconSize";
//interface
import IInput from "../IInput";

export default interface ILabelInput extends IInput {
  label: string;
  button?: boolean;
  buttonType?: IconType;
  border?: boolean;
  iconSize?: IconSize;
}
