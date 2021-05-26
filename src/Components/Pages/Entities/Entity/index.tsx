import BoxImage from "Components/Common/Image/Boxing";
import { FC } from "react";
//style
import * as CSS from "./css";
//interface
import IEntity from "./IEntity";

const Entity: FC<IEntity> = (props) => {
  return (
    <CSS.ContentS>
      <CSS.LeftS>
        <BoxImage imageName={props.photo} alt="" maxHeight={100} maxWidth={100}/>
      </CSS.LeftS>
      <CSS.RightS>
        <CSS.TopS>{props.title}</CSS.TopS>
        <CSS.BottomS>{props.subTitle}</CSS.BottomS>
      </CSS.RightS>
    </CSS.ContentS>
  );
};

export default Entity;
