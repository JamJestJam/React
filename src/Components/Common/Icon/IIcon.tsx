import { IconsEnumPng, IconsEnumSvg } from "./IconsEnum";

interface IIcon {
    image: IconsEnumSvg | IconsEnumPng;
    alt: string;
    value?: number;
    border?: true;
}

export default IIcon;
