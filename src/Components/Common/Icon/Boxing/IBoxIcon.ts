//data
import IIcon from "../IIcon";

interface IBoxIcon extends IIcon {
  background?: string;
  boxShadow?: boolean;
  boxHeight?: number;
  boxWidth?: number;
  rounded?: boolean;
  value?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default IBoxIcon;
