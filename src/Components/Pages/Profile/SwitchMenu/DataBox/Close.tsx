import React, { FC } from "react";
//data
import JSON from "Data/databox.json"
//style
import * as CSS from "./css";
//interface
import IDataBox from "./IDataBox";

const DataBoxClose: FC<IDataBox> = (props) => {
  const data = props.data;
  return (
    <CSS.ContentS>
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
    </CSS.ContentS>
  );
};

export default DataBoxClose;
