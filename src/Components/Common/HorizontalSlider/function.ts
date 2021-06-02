import React from "react";
//interface
import ISliderState from "./ISlider";

export function stopProp(event: React.MouseEvent) {
  event.preventDefault();
  event.stopPropagation();
}

export function calcMove(state: ISliderState, movementX: number) {
  const transform = state.transform + movementX;
  if (transform > state.padding) return state.padding;
  if (transform < -state.maxWidth) return -state.maxWidth;
  return transform;
}
