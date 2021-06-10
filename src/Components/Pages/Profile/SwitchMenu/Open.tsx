import React, { FC } from "react";
import { Formik } from "formik";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
import DataBoxOpen from "./DataBox/Open";
import ProposalsOpen from "./Table/Proposals/Open";
import AmountFeesOpen from "./Table/AmountFees/Open";
import PanelInformationsOpen from "./PanelInformations/Open";
//style
import * as CSS from "./css";
//function
import { uniqueArray } from "Functions/uniqueArray";
//interface
import { IDataBoxInfo } from "./DataBox/IDataBox";
import IPanelInformations from "./PanelInformations/IPanelInformation";
import IProposals from "./Table/Proposals/IProposals";
import IAmountFees from "./Table/AmountFees/IAmountFees";
import InternalReviewsOpen from "./Table/InternalReviews/Open";
import IInternalReviews from "./Table/InternalReviews/IInternalReviews";

interface IOpen {
  data1: IDataBoxInfo;
  data2: IPanelInformations;
  data3: IProposals[];
  data4: IInternalReviews[];
  data5: IAmountFees[];

  close: () => void;
  save: (
    a: IDataBoxInfo,
    b: IPanelInformations,
    c: IProposals[],
    d: IInternalReviews[],
    e: IAmountFees[]
  ) => void;
}

const Open: FC<IOpen> = (props) => {
  return (
    <Formik
      initialValues={{
        data1: props.data1,
        data2: props.data2,
        data3: props.data3,
        data4: props.data4,
        data5: props.data5,
      }}
      onSubmit={(data) => {
        data.data1.expertise = uniqueArray(data.data1.expertise);
        data.data1.specialties = uniqueArray(data.data1.specialties);
        data.data1.adminssion = uniqueArray(data.data1.adminssion);
        data.data1.counties = uniqueArray(data.data1.counties);

        props.save(data.data1, data.data2, data.data3, data.data4, data.data5);
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
            <ProposalsOpen data={values.data3} handleChange={handleChange} />
            <InternalReviewsOpen
              data={values.data4}
              handleChange={handleChange}
            />
            <AmountFeesOpen data={values.data5} handleChange={handleChange} />
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
