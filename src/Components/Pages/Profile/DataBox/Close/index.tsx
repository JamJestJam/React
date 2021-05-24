import React, { FC } from "react";
//component
import BoxIcon from "Components/Common/Icon/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
import JSON from "Data/databox.json"
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
            return <CSS.ContentBoxS key={i}>{JSON.Expertise[+e]}</CSS.ContentBoxS>;
          })}
        </div>
      </div>
      <div>
        <CSS.NameS>Specialties</CSS.NameS>
        <div>
          {data.specialties.map((e, i) => {
            return <CSS.ContentBoxS key={i}>{JSON.Specialties[+e]}</CSS.ContentBoxS>;
          })}
        </div>
      </div>
      <div>
        <CSS.NameS>Adminssion to practice law</CSS.NameS>
        <div>
          {data.adminssion.map((e, i) => {
            return <CSS.ContentBoxS key={i}>{JSON.Adminssion[+e]}</CSS.ContentBoxS>;
          })}
        </div>
      </div>
      <div>
        <CSS.NameS>Counties</CSS.NameS>
        <div>
          {data.counties.map((e, i) => {
            return <CSS.ContentBoxS key={i}>{JSON.Counties[+e]}</CSS.ContentBoxS>;
          })}
        </div>
      </div>
      <CSS.ButtonsS>
        <BoxIcon
          iconType={IconType.edit}
          iconSize={IconSize.small}
          alt=""
          onClick={props.open}
        />
      </CSS.ButtonsS>
    </>
  );
};

export default DataBoxClose;
