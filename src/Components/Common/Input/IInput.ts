import React from "react";
import { FontSizeType } from "style/Fonts";

export default interface IImput {
    BorderColor?: string;
    Background?: string;
    FontSize?: FontSizeType;
    Height?: number;
    Width?: number;
    Color?: string;

    Value?: string;

    Change?: (a: React.ChangeEvent<HTMLInputElement>) => void;
    Focus?: (a: React.FocusEvent<HTMLInputElement>) => void;
    Blur?: (a: React.FocusEvent<HTMLInputElement>) => void;
}
