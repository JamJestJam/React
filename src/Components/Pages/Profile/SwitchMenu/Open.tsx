import React, { FC } from "react";
import { Formik } from "formik";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
import DataBoxOpen from "./DataBox/Open";
//style
import * as CSS from "./css";
//function
import { uniqueArray } from "Functions/uniqueArray";
//interface
import { IDataBoxInfo } from "./DataBox/IDataBox";
import PanelInformationsOpen from "./PanelInformations/Open";
import IPanelInformations from "./PanelInformations/IPanelInformation";

interface IOpen {
  data1: IDataBoxInfo;
  data2: IPanelInformations;

  close: () => void;
  save: (a: IDataBoxInfo, b: IPanelInformations) => void;
}

const Open: FC<IOpen> = (props) => {
  return (
    <Formik
      initialValues={{
        data1: props.data1,
        data2: props.data2,
      }}
      onSubmit={(data) => {
        data.data1.expertise = uniqueArray(data.data1.expertise);
        data.data1.specialties = uniqueArray(data.data1.specialties);
        data.data1.adminssion = uniqueArray(data.data1.adminssion);
        data.data1.counties = uniqueArray(data.data1.counties);

        props.save(data.data1, data.data2);
      }}
    >
      {({ values, handleChange, handleSubmit, setValues }) => {
        return (
          <>
            <DataBoxOpen
              data={values.data1}
              handleChange={handleChange}
              setValues={(val) => {
                setValues({ ...values, data1: val });
              }}
            />
            <PanelInformationsOpen
              data={values.data2}
              handleChange={handleChange}
              setValues={(val) => {
                setValues({ ...values, data2: val });
              }}
            />
            <CSS.ButtonsS>
              <BoxIcon
                onClick={() => {
                  handleSubmit();
                  props.close();
                }}
                iconType={IconType.book}
                iconSize={IconSize.small}
                alt=""
              />
              <BoxIcon
                onClick={props.close}
                iconType={IconType.exit}
                iconSize={IconSize.small}
                alt=""
              />
            </CSS.ButtonsS>
          </>
        );
      }}
    </Formik>
  );
};

export default Open;
