import React, { FC } from "react";
import { Formik } from "formik";
//componetnt
import BoxIcon from "Components/Common/Icon/Boxing";
import InputLabel from "Components/Common/Input/LabelInput";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//style
import * as CSS from "../css";
//interface
import IOpen from "./IOpen";

const InfoOpen: FC<IOpen> = (props) => {
  const user = props.userInfo;

  return (
    <Formik
      initialValues={{
        name: user.name,
        city: user.city,
        street: user.street,
        partner: user.partner,
        email: user.email,
        phone: user.phone,
      }}
      onSubmit={(data) => {
        props.save(data);
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <>
            <CSS.LeftS>
              <InputLabel
                id="name"
                Label="Name"
                FontSize={"12"}
                Value={values.name}
                Change={handleChange}
              />
              <InputLabel
                id="street"
                Label="Street"
                FontSize={"12"}
                Value={values.street}
                Change={handleChange}
              />
              <InputLabel
                id="city"
                Label="City"
                FontSize={"12"}
                Value={values.city}
                Change={handleChange}
              />
              <InputLabel
                id="partner"
                Label="Partner"
                FontSize={"12"}
                Value={values.partner}
                Change={handleChange}
              />
            </CSS.LeftS>
            <CSS.RightS>
              <InputLabel
                id="email"
                Label="Email"
                FontSize={"12"}
                Value={values.email}
                Change={handleChange}
              />
              <InputLabel
                id="phone"
                Label="Phone"
                FontSize={"12"}
                Value={values.phone}
                Change={handleChange}
              />
            </CSS.RightS>
            <CSS.EditS>
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
            </CSS.EditS>
          </>
        );
      }}
    </Formik>
  );
};

export default InfoOpen;
