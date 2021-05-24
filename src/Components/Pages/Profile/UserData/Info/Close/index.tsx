import React, { FC } from "react";
//componetnt
import BoxIcon from "Components/Common/Icon/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//style
import * as CSS from "../css";
//interface
import IClose from "./IClose";

const InfoClose: FC<IClose> = (props) => {
  const user = props.userInfo;
  return (
    <>
      <CSS.LeftS>
        <CSS.BoldS>{user.name}</CSS.BoldS>
        <CSS.BoldS>{user.street}</CSS.BoldS>
        <div>{user.city}</div>
        <div>{user.partner}</div>
      </CSS.LeftS>
      <CSS.RightS>
        <div>{user.email}</div>
        <div>{user.phone}</div>
      </CSS.RightS>
      <CSS.EditS>
        <BoxIcon
          onClick={props.open}
          iconType={IconType.edit}
          iconSize={IconSize.small}
          alt=""
        />
      </CSS.EditS>
    </>
  );
};

export default InfoClose;
