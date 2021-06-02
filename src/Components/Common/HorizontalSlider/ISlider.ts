import React from "react";

export default interface ISliderState {
    moving: boolean,
    move: boolean,
    maxWidth: number,
    padding: number,
    transform: number,
}

export interface ISlider {
    children?: React.ReactNode;
}