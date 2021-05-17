import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import InfoOpen from "./open";
import InfoClose from "./close";
import BoxIcon from "Components/Common/Icon/Boxing";
//data
import { IconType } from "Components/Common/Icon/IconType";
import { IconSize } from "Components/Common/Icon/IconSize";
//style
import * as CSS from "./css";
//inteface
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";
import { userInfo } from "./IInfo";

const Info: FC = () => {
  // const dispatch = useDispatch();
  const { user } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));

  const [state, setState] = useState({
    userInfo: {
      name: "",
      street: "",
      city: "",
      phone: "",
      email: "",
      partner: "partner",
    },
    open: false,
  });

  useEffect(() => {
    setState({
      ...state,
      userInfo: {
        name: user?.name || "",
        street: user?.address.street || "",
        city: user?.address.city || "",
        phone: user?.phone || "",
        email: user?.email || "",
        partner: "partner",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const save = (data: userInfo) => {
    setState({
      ...state,
      userInfo: data,
      open: false
    })
  };
  const open = ()=>{
    setState({
      ...state,
      open: true
    })
  };
  const close = ()=>{
    setState({
      ...state,
      open: false
    })
  };

  return (
    <CSS.ContentS>
      {state.open ? (
        <InfoOpen userInfo={state.userInfo} close={close} save={save}/>
      ) : (
        <InfoClose userInfo={state.userInfo} open={open} />
      )}
    </CSS.ContentS>
  );
};

export default Info;
