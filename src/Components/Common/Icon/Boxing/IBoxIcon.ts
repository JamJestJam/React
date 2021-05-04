import IIcon from "../IIcon";

interface IBoxIcon extends IIcon {
    Background?: string;
    BoxShadow?: boolean;
    BoxHeight?: number;
    BoxWidth?: number;
    Rounded?: boolean;
    Value?: number;
}

export default IBoxIcon;
