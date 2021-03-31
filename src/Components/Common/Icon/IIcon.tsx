import { IconsEnumPng, IconsEnumSvg } from "./IconsEnum";

interface IIcon {
    image: IconsEnumSvg | IconsEnumPng;
    alt: string;
    value?: number;
}

export default IIcon;