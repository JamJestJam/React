import { FC, useState } from "react";
//components
import Close from "./Close";
import Open from "./Open";
//interface
import { IDataBoxInfo } from "./DataBox/IDataBox";
import IPanelInframation from "./PanelInformations/IPanelInformation";
//style
import * as CSS from "./css";

const SwitchMenu: FC = () => {
  const [state, setState] = useState(false);
  const [data1, setData1] = useState({
    expertise: ["0", "1", "2"],
    specialties: ["0"],
    adminssion: ["0"],
    counties: ["0"]
  });
  const [data2, setData2] = useState({
    input1: "610€/hour (Negotiated)",
    input2: "Monthly 10k€ retainer - see with Seanny Smith",
    input3: "Corporate M&A and internationa acquisitions",
    file: "File not set"
  });

  const open = () => {
    setState(true);
  };
  const close = () => {
    setState(false);
  };
  const save = (data1: IDataBoxInfo, data2: IPanelInframation) => {
    setData1(data1);
    setData2(data2);
  };

  return (
    <CSS.ContentS>
      {state ? (
        <Open data1={data1} data2={data2} close={close} save={save} />
      ) : (
        <Close data1={data1} data2={data2} open={open} />
      )}
    </CSS.ContentS>
  );
};

export default SwitchMenu;
