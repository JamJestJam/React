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
                label="Name"
                fontSize={"12"}
                value={values.name}
                change={handleChange}
              />
              <InputLabel
                id="street"
                label="Street"
                fontSize={"12"}
                value={values.street}
                change={handleChange}
              />
              <InputLabel
                id="city"
                label="City"
                fontSize={"12"}
                value={values.city}
                change={handleChange}
              />
              <InputLabel
                id="partner"
                label="Partner"
                fontSize={"12"}
                value={values.partner}
                change={handleChange}
              />
            </CSS.LeftS>
            <CSS.RightS>
              <InputLabel
                id="email"
                label="Email"
                fontSize={"12"}
                value={values.email}
                change={handleChange}
              />
              <InputLabel
                id="phone"
                label="Phone"
                fontSize={"12"}
                value={values.phone}
                change={handleChange}
              />
            </CSS.RightS>
            <CSS.EditS>
              <BoxIcon
                onClick={() => {
                  handleSubmit();
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
            </CSS.EditS>
          </>
        );
      }}
    </Formik>
  );
};

export default InfoOpen;
