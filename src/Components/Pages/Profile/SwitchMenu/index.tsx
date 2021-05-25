import { FC, useState } from "react";
//components
import Close from "./Close";
import Open from "./Open";
//interface
import { IDataBoxInfo } from "./DataBox/IDataBox";
import IPanelInframation from "./PanelInformations/IPanelInformation";
//style
import * as CSS from "./css";
import IProposals from "./Table/Proposals/IProposals";
import IAmountFees from "./Table/AmountFees/IAmountFees";

const SwitchMenu: FC = () => {
  const [state, setState] = useState(false);
  const [data1, setData1] = useState({
    expertise: ["0", "1", "2"],
    specialties: ["0"],
    adminssion: ["0"],
    counties: ["0"],
  });
  const [data2, setData2] = useState({
    input1: "610€/hour (Negotiated)",
    input2: "Monthly 10k€ retainer - see with Seanny Smith",
    input3: "Corporate M&A and internationa acquisitions",
    file: "File not set",
  });
  const [data3, setData3] = useState([
    {
      name: "name 1",
      entity: "entity 1",
      location: "Sweden",
      expertise: "Client expertise",
      date: "2021-05-26",
      firm: "firm 1",
    },
    {
      name: "name 2",
      entity: "entity 2",
      location: "Sweden",
      expertise: "Client expertise",
      date: "2021-05-27",
      firm: "firm 2",
    },
    {
      name: "name 3",
      entity: "entity 3",
      location: "Sweden",
      expertise: "Client expertise",
      date: "2021-05-28",
      firm: "firm 3",
    },
  ]);
  const [data4, setData4] = useState([
    {
      year: 2019,
      costCenter: "CS 153",
      currency: "€",
      totalAmount: "3500",
      lawFirm: "Clifford chance",
    },
    {
      year: 2018,
      costCenter: "CS 153",
      currency: "€",
      totalAmount: "9500",
      lawFirm: "Linklaters",
    },
    {
      year: 2017,
      costCenter: "CS 47",
      currency: "€",
      totalAmount: "10500",
      lawFirm: "Linklaters",
    },
  ]);

  const open = () => {
    setState(true);
  };
  const close = () => {
    setState(false);
  };
  const save = (
    data1: IDataBoxInfo,
    data2: IPanelInframation,
    data3: IProposals[],
    data4: IAmountFees[]
  ) => {
    setData1(data1);
    setData2(data2);
    setData3(data3);
    setData4(data4);
  };

  return (
    <CSS.ContentS>
      {state ? (
        <Open
          data1={data1}
          data2={data2}
          data3={data3}
          data4={data4}
          close={close}
          save={save}
        />
      ) : (
        <Close
          data1={data1}
          data2={data2}
          data3={data3}
          data4={data4}
          open={open}
        />
      )}
    </CSS.ContentS>
  );
};

export default SwitchMenu;
