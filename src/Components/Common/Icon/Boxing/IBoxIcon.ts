//data
import IIcon from "../IIcon";

interface IBoxIcon extends IIcon {
  Background?: string;
  BoxShadow?: boolean;
  BoxHeight?: number;
  BoxWidth?: number;
  Rounded?: boolean;
  Value?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>)=>void;
}

export default IBoxIcon;
