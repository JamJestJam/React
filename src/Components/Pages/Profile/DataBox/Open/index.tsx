import React, { FC } from "react";
import { Formik } from "formik";
//component
import BoxIcon from "Components/Common/Icon/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//style
import * as CSS from "../css";
//interface
import IOpen from "./IOpen";

const DataBoxOpen: FC<IOpen> = (props) => {
  const data = props.data;
  return (
    <Formik
      initialValues={{
        expertise: ["Mergers and acquisition"],
        specialties: ["Cross border operation", "Transaction over 500M€/$"],
        adminssion: ["paris bar association", "Tunisian bar association"],
        counties: ["Tunisia"],
      }}
      onSubmit={(data) => {
        props.save(data);
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <>
            <div>
              <CSS.NameS>
                <div>Expertise</div>
                <BoxIcon
                  IconType={IconType.plus}
                  IconSize={IconSize.Mini}
                  Alt=""
                  BoxHeight={10}
                  BoxWidth={20}
                />
              </CSS.NameS>
              <div>
                {data.expertise.map((e, i) => {
                  return (
                    <CSS.SelectS key={i}>
                      <CSS.OptionS>{e}</CSS.OptionS>
                    </CSS.SelectS>
                  );
                })}
              </div>
            </div>
            <div>
              <CSS.NameS>
                <div>Specialties </div>
                <BoxIcon
                  IconType={IconType.plus}
                  IconSize={IconSize.Mini}
                  Alt=""
                  BoxHeight={10}
                  BoxWidth={20}
                />
              </CSS.NameS>

              <div>
                {data.specialties.map((e, i) => {
                  return (
                    <CSS.SelectS key={i}>
                      <CSS.OptionS>{e}</CSS.OptionS>
                    </CSS.SelectS>
                  );
                })}
              </div>
            </div>
            <div>
              <CSS.NameS>
                <div>Adminssion to practice law </div>
                <BoxIcon
                  IconType={IconType.plus}
                  IconSize={IconSize.Mini}
                  Alt=""
                  BoxHeight={10}
                  BoxWidth={20}
                />
              </CSS.NameS>
              <div>
                {data.adminssion.map((e, i) => {
                  return (
                    <CSS.SelectS key={i}>
                      <CSS.OptionS>{e}</CSS.OptionS>
                    </CSS.SelectS>
                  );
                })}
              </div>
            </div>
            <div>
              <CSS.NameS>
                <div>Counties</div>
                <BoxIcon
                  IconType={IconType.plus}
                  IconSize={IconSize.Mini}
                  Alt=""
                  BoxHeight={10}
                  BoxWidth={20}
                />
              </CSS.NameS>
              <div>
                {data.counties.map((e, i) => {
                  return (
                    <CSS.SelectS key={i}>
                      <CSS.OptionS>{e}</CSS.OptionS>
                    </CSS.SelectS>
                  );
                })}
              </div>
            </div>
            <CSS.ButtonsS>
              <div onClick={props.close}>
                <BoxIcon
                  IconType={IconType.book}
                  IconSize={IconSize.Small}
                  Alt=""
                />
              </div>
              <div onClick={props.close}>
                <BoxIcon
                  IconType={IconType.exit}
                  IconSize={IconSize.Small}
                  Alt=""
                />
              </div>
            </CSS.ButtonsS>
          </>
        );
      }}
    </Formik>
  );
};

export default DataBoxOpen;
