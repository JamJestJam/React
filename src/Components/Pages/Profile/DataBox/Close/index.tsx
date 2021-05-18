import React, { FC } from "react";
//component
import BoxIcon from "Components/Common/Icon/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//style
import * as CSS from "../css";
//interface
import IClose from "./IClose";

const DataBoxClose: FC<IClose> = (props) => {
  const data = props.data;
  return (
    <>
      <div>
        <CSS.NameS>Expertise</CSS.NameS>
        <div>
          {data.expertise.map((e, i) => {
            return <CSS.ContentBoxS key={i}>{e}</CSS.ContentBoxS>;
          })}
          
        </div>
      </div>
      <div>
        <CSS.NameS>Specialties</CSS.NameS>
        <div>
          {data.specialties.map((e, i) => {
            return <CSS.ContentBoxS key={i}>{e}</CSS.ContentBoxS>;
          })}
        </div>
      </div>
      <div>
        <CSS.NameS>Adminssion to practice law</CSS.NameS>
        <div>
          {data.adminssion.map((e, i) => {
            return <CSS.ContentBoxS key={i}>{e}</CSS.ContentBoxS>;
          })}
        </div>
      </div>
      <div>
        <CSS.NameS>Counties</CSS.NameS>
        <div>
          {data.counties.map((e, i) => {
            return <CSS.ContentBoxS key={i}>{e}</CSS.ContentBoxS>;
          })}
        </div>
      </div>
      <CSS.ButtonsS>
        <div onClick={props.open}>
          <BoxIcon IconType={IconType.edit} IconSize={IconSize.Small} Alt="" />
        </div>
      </CSS.ButtonsS>
    </>
  );
};

export default DataBoxClose;
