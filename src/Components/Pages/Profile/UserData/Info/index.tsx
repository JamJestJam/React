import React, { FC, useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
//components
import InfoOpen from "./Open";
import InfoClose from "./Close";
//style
import * as CSS from "./css";
//actions
import setUser, { SetUser } from "Actions/User/setUser";
//inteface
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";
import { userInfo } from "./IInfo";

const Info: FC = () => {
  const dispatch = useDispatch();
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
        partner: "Partner",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const save = (data: userInfo) => {
    dispatch<SetUser>(
      setUser(data.name, data.street, data.city, data.email, data.phone)
    );

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

