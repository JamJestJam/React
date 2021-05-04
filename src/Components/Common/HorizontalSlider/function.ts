import React from "react";

export function stopProp(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
}

interface IState {
    moving: boolean;
    maxWidth: number;
    padding: number;
    transform: number;
}

export function calcMove(state: IState, movementX: number) {
    const transform = state.transform + movementX;
    if (transform > state.padding) return state.padding;
    if (transform < -state.maxWidth) return -state.maxWidth;
    return transform;
}
