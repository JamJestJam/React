import React, { FC, useRef } from "react";
import { useSelector } from "react-redux";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import InputLabel from "Components/Common/Input/LabelInput";
import BoxIcon from "Components/Common/Icon/Boxing";
import PanelInformationsUser from "./User";
//style
import * as CSS from "./css";
//interface
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";
import IOpen from "./IOpen";

const PanelInformationsOpen: FC<IOpen> = (p) => {
  const { users } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));
  const ref = useRef<HTMLInputElement>(null);
  const data = p.data;
  const click = () => {
    ref.current?.click();
  };


  return (
    <CSS.ContentS>
      <CSS.ElementS>
        <CSS.TopS>Panel information's</CSS.TopS>
        <CSS.BottomS>Hourly fee</CSS.BottomS>
        <InputLabel label="" value={data.input1} id="data2.input1" change={p.handleChange} />
        <CSS.BottomS>Terms & conditions</CSS.BottomS>
        <InputLabel label="" value={data.input2} id="data2.input2" change={p.handleChange} />
        <CSS.BoxS onClick={click}>
          <CSS.HiddenInputS type="file" ref={ref} onChange={p.handleChange} id="data2.file" />
          <BoxIcon
            iconSize={IconSize.medium}
            iconType={IconType.bell}
            onClick={() => { }}
            alt=""
            boxShadow={true}
          />
          <div>{data.file}</div>
        </CSS.BoxS>
        <CSS.TopS>Services & projects</CSS.TopS>
        <InputLabel label="" value={data.input3} id="data2.input3" change={p.handleChange} />
        <CSS.TopS>Internal correspondents</CSS.TopS>
        <PanelInformationsUser user={users[1]} />
        <PanelInformationsUser user={users[2]} />
      </CSS.ElementS>
    </CSS.ContentS>
  );
};

export default PanelInformationsOpen;
