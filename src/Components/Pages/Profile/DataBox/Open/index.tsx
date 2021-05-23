import React, { FC } from "react";
import { Formik } from "formik";
//component
import BoxIcon from "Components/Common/Icon/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
import JSON from "Data/databox.json";
//style
import * as CSS from "../css";
//interface
import IOpen from "./IOpen";
import OptionBox from "Components/Pages/Profile/DataBox/Open/OptionBox";
import { uniqueArray } from "Functions/uniqueArray";
//function


const DataBoxOpen: FC<IOpen> = (props) => {
  const data = props.data;
  return (
    <Formik
      initialValues={{
        expertise: data.expertise,
        specialties: data.specialties,
        adminssion: data.adminssion,
        counties: data.counties,
      }}
      onSubmit={(data) => {
        data.expertise = uniqueArray(data.expertise);
        data.specialties = uniqueArray(data.specialties);
        data.adminssion = uniqueArray(data.adminssion);
        data.counties = uniqueArray(data.counties);
        props.save(data);
      }}
    >
      {({ values, handleChange, handleSubmit, setValues }) => {
        return (
          <>
            <div>
              <CSS.NameS>
                <div>Expertise</div>
                <BoxIcon
                  onClick={() => {
                    values.expertise.push("0");
                    setValues({ ...values });
                  }}
                  IconType={IconType.plus}
                  IconSize={IconSize.mini}
                  Alt=""
                  boxHeight={10}
                  boxWidth={20}
                />
              </CSS.NameS>
              <div>
                {values.expertise.map((val, i) => {
                  return (
                    <OptionBox
                      id={`expertise[${i}]`}
                      Change={handleChange}
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
                    values.specialties.push("0");
                    setValues({ ...values });
                  }}
                  IconType={IconType.plus}
                  IconSize={IconSize.mini}
                  Alt=""
                  boxHeight={10}
                  boxWidth={20}
                />
              </CSS.NameS>

              <div>
                {values.specialties.map((val, i) => {
                  return (
                    <OptionBox
                      id={`expertise[${i}]`}
                      Change={handleChange}
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
                <div>Adminssion to practice law </div>
                <BoxIcon
                  onClick={() => {
                    values.adminssion.push("0");
                    setValues({ ...values });
                  }}
                  IconType={IconType.plus}
                  IconSize={IconSize.mini}
                  Alt=""
                  boxHeight={10}
                  boxWidth={20}
                />
              </CSS.NameS>
              <div>
                {values.adminssion.map((val, i) => {
                  return (
                    <OptionBox
                      id={`expertise[${i}]`}
                      Change={handleChange}
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
                <div>Counties</div>
                <BoxIcon
                  onClick={() => {
                    values.counties.push("0");
                    setValues({ ...values });
                  }}
                  IconType={IconType.plus}
                  IconSize={IconSize.mini}
                  Alt=""
                  boxHeight={10}
                  boxWidth={20}
                />
              </CSS.NameS>
              <div>
                {values.counties.map((val, i) => {
                  return (
                    <OptionBox
                      id={`expertise[${i}]`}
                      Change={handleChange}
                      value={val}
                      posibleOptions={JSON.Expertise}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
            <CSS.ButtonsS>
              <BoxIcon
                onClick={() => {
                  handleSubmit();
                }}
                IconType={IconType.book}
                IconSize={IconSize.small}
                Alt=""
              />
              <BoxIcon
                onClick={props.close}
                IconType={IconType.exit}
                IconSize={IconSize.small}
                Alt=""
              />
            </CSS.ButtonsS>
          </>
        );
      }}
    </Formik>
  );
};

export default DataBoxOpen;
