//data
import { IconSize } from "Components/Common/Icon/IconSize";
//interface
import IInput from "../IInput";

export default interface ISearch extends IInput {
  Label: string;
  Button?: boolean;
  Border?: boolean;
  IconSize?: IconSize;
}
