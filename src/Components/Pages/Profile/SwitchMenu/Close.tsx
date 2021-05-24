import React, { FC } from "react";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import PanelInformationsClose from "./PanelInformations/Close";
import BoxIcon from "Components/Common/Icon/Boxing";
import DataBoxClose from "./DataBox/Close";
//style
import * as CSS from "./css";
//interface
import { IDataBoxInfo } from "./DataBox/IDataBox";
import IPanelInformations from "./PanelInformations/IPanelInformation";

interface IClose {
  data1: IDataBoxInfo;
  data2: IPanelInformations;
  open: ()=>void;
}

const Close: FC<IClose> = (props) => {
  return (
    <>
      <DataBoxClose data={props.data1} />
      <PanelInformationsClose data={props.data2}/>
      <CSS.ButtonsS>
        <BoxIcon
          iconType={IconType.edit}
          iconSize={IconSize.small}
          alt=""
          onClick={props.open}
        />
      </CSS.ButtonsS>
    </>
  );
};

export default Close;
