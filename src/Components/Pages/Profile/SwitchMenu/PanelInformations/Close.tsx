import React, { FC } from "react";
import { useSelector } from "react-redux";
import IUsersReducer from "Reduces/user/IUsersReducer";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
import PanelInformationsUser from "./User";
//style
import * as CSS from "./css";
//interface
import IState from "Reduces/IState";
import { IPanelInformationData } from "./IPanelInformation";

const PanelInformationsClose: FC<IPanelInformationData> = (p) => {
  const { users } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));

  return (
    <CSS.ContentS>
      <CSS.ElementS>
        <CSS.TopS>Panel information's</CSS.TopS>
        <CSS.BottomS>Hourly fee</CSS.BottomS>
        <CSS.InputBoxS>{p.data.input1}</CSS.InputBoxS>
        {/* <InputLabel label="" value="610&euro;/hour (Negotiated)" /> */}
        <CSS.BottomS>Terms & conditions</CSS.BottomS>
        <CSS.InputBoxS>{p.data.input2}</CSS.InputBoxS>
        <CSS.BoxS>
          <CSS.HiddenInputS />
          <BoxIcon
            iconSize={IconSize.medium}
            iconType={IconType.bell}
            onClick={() => { }}
            alt=""
            boxShadow={true}
          />
          <div>{p.data.file}</div>
        </CSS.BoxS>
        <CSS.TopS>Services & projects</CSS.TopS>
        <CSS.InputBoxS>{p.data.input3}</CSS.InputBoxS>
        <CSS.TopS>Internal correspondents</CSS.TopS>
        <PanelInformationsUser user={users[1]} />
        <PanelInformationsUser user={users[2]} />
      </CSS.ElementS>
    </CSS.ContentS>
  );
};

export default PanelInformationsClose;
