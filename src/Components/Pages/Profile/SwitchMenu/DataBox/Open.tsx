import React, { FC } from "react";
//component
import BoxIcon from "Components/Common/Icon/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
import JSON from "Data/databox.json";
import OptionBox from "./OptionBox";
//style
import * as CSS from "./css";
//interface
import IOpen from "./IOpen";

const DataBoxOpen: FC<IOpen> = (props) => {
  const data = props.data;
  return (
    <CSS.ContentS>
      <div>
        <CSS.NameS>
          <div>Expertise</div>
          <BoxIcon
            onClick={() => {
              data.expertise.push("0");
              props.setValues({ ...data });
            }}
            iconType={IconType.plus}
            iconSize={IconSize.mini}
            alt=""
            boxHeight={10}
            boxWidth={20}
          />
        </CSS.NameS>
        <div>
          {data.expertise.map((val, i) => {
            return (
              <OptionBox
                id={`data1.expertise[${i}]`}
                onChange={props.handleChange}
                value={val}
                posibleOptions={JSON.Expertise}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div>
        <CSS.NameS>
          <div>Specialties </div>
          <BoxIcon
            onClick={() => {
              data.specialties.push("0");
              props.setValues({ ...data });
            }}
            iconType={IconType.plus}
            iconSize={IconSize.mini}
            alt=""
            boxHeight={10}
            boxWidth={20}
          />
        </CSS.NameS>

        <div>
          {data.specialties.map((val, i) => {
            return (
              <OptionBox
                id={`data1.specialties[${i}]`}
                onChange={props.handleChange}
                value={val}
                posibleOptions={JSON.Specialties}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div>
        <CSS.NameS>
          <div>Adminssion to practice law </div>
          <BoxIcon
            onClick={() => {
              data.adminssion.push("0");
              props.setValues({ ...data });
            }}
            iconType={IconType.plus}
            iconSize={IconSize.mini}
            alt=""
            boxHeight={10}
            boxWidth={20}
          />
        </CSS.NameS>
        <div>
          {data.adminssion.map((val, i) => {
            return (
              <OptionBox
                id={`data1.adminssion[${i}]`}
                onChange={props.handleChange}
                value={val}
                posibleOptions={JSON.Adminssion}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div>
        <CSS.NameS>
          <div>Counties</div>
          <BoxIcon
            onClick={() => {
              data.counties.push("0");
              props.setValues({ ...data });
            }}
            iconType={IconType.plus}
            iconSize={IconSize.mini}
            alt=""
            boxHeight={10}
            boxWidth={20}
          />
        </CSS.NameS>
        <div>
          {data.counties.map((val, i) => {
            return (
              <OptionBox
                id={`data1.counties[${i}]`}
                onChange={props.handleChange}
                value={val}
                posibleOptions={JSON.Counties}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </CSS.ContentS>
  );
};

export default DataBoxOpen;
