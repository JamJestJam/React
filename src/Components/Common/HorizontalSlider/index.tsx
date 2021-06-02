import React from "react";
//style
import * as CSS from "./css";
//functions
import * as F from "./function";
//interfaces
import ISliderState, { ISlider } from "./ISlider";

class Slider extends React.Component<ISlider, ISliderState> {
  ref: React.RefObject<HTMLDivElement>;

  constructor(props: ISlider) {
    super(props);

    this.state = {
      moving: false,
      move: false,
      maxWidth: 0,
      padding: 5,
      transform: 0,
    };

    this.ref = React.createRef();
  }

  start = (even: React.MouseEvent<HTMLDivElement>) => {
    F.stopProp(even);
    this.setState((state) => ({
      moving: true,
    }));
  };

  move = (event: React.MouseEvent) => {
    F.stopProp(event);

    if (this.state.moving) {
      const calcmove = F.calcMove(this.state, event.movementX);
      this.setState((state) => ({
        transform: calcmove,
        move: true,
      }));
    }
  };

  stop = (event: React.MouseEvent) => {
    F.stopProp(event);

    if (this.state.moving)
      this.setState((state) => ({ moving: false, move: false }));
  };

  select = () => {
    return false;
  };

  componentDidMount = () => {
    const element: HTMLDivElement =
      this.ref.current || document.createElement("div");

    this.setState((state) => ({
      maxWidth: element.scrollWidth - element.offsetWidth + state.padding,
    }));
  };

  render() {
    return <CSS.SliderS
      onSelectCapture={this.select}
      onMouseDown={this.start}
      onMouseLeave={this.stop}
      onMouseMove={this.move}
      onSelect={this.select}
      onMouseUp={this.stop}
    >
      <CSS.ContentS
        moving={this.state.move}
        ref={this.ref}
        style={{
          transform: "translateX(" + this.state.transform + "px)",
        }}
      >
        {this.props.children}
      </CSS.ContentS>
    </CSS.SliderS>;
  }
}

export default Slider;
