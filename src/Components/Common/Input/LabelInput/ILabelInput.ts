//data
import { IconType } from "Components/Common/Icon/IconType";
import { IconSize } from "Components/Common/Icon/IconSize";
//interface
import IInput from "../IInput";

export default interface ILabelInput extends IInput {
  Label: string;
  Button?: boolean;
  ButtonType?: IconType;
  Border?: boolean;
  IconSize?: IconSize;
}
