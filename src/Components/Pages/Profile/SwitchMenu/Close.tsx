import React, { FC } from "react";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import PanelInformationsClose from "./PanelInformations/Close";
import BoxIcon from "Components/Common/Icon/Boxing";
import DataBoxClose from "./DataBox/Close";
import AmountFeesClose from "./Table/AmountFees/Close";
import InternalReviewsClose from "./Table/InternalReviews/Close";
import ProposalsClose from "./Table/Proposals/Close";
//style
import * as CSS from "./css";
//interface
import { IDataBoxInfo } from "./DataBox/IDataBox";
import IPanelInformations from "./PanelInformations/IPanelInformation";
import IProposals from "./Table/Proposals/IProposals";
import IAmountFees from "./Table/AmountFees/IAmountFees";

interface IClose {
  data1: IDataBoxInfo;
  data2: IPanelInformations;
  data3: IProposals[];
  data4: IAmountFees[];
  open: () => void;
}

const Close: FC<IClose> = (props) => {
  return (
    <>
      <DataBoxClose data={props.data1} />
      <PanelInformationsClose data={props.data2} />
      <ProposalsClose data={props.data3} />
      <InternalReviewsClose data={props.data3} />
      <AmountFeesClose data={props.data4} />
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
