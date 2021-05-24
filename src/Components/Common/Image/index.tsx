import React, { FC, useState } from "react";
//style
import ImageS from "./css";
//interface
import IImage from "./IImage";

const Image: FC<IImage> = (props) => {
  const [state, setState] = useState({
    active: false,
  });

  const width = props.maxWidth || 40;
  const height = props.maxHeight || 40;

  const load = () => {
    setState({
      ...state,
      active: true,
    });
  };

  return (
    <ImageS
      bordered={props.bordered}
      active={state.active}
      src={props.imageName}
      maxHeight={height}
      maxWidth={width}
      alt={props.alt}
      onLoad={load}
    />
  );
};

export default Image;
