//data
import { IconType } from "Components/Common/Icon/IconType";

export default interface IWorkspaceEl {
  imageName: string;
  link: string;
  icon: IconType;
  name: string;
  users: number;
  days: number;
}
