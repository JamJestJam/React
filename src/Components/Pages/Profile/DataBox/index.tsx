import { FC, useState } from "react";
//components
import DataBoxClose from "./Close";
import DataBoxOpen from "./Open";
//style
import * as CSS from "./css";
//interface
import { IDataBoxInfo } from "./IDataBox";

const DataBox: FC = () => {
  const [state, setState] = useState({
    open: false,
    data: {
      expertise: ["0", "1", "2"],
      specialties: ["0"],
      adminssion: ["0"],
      counties: ["0"],
    },
  });

  const open = () => {
    setState({
      ...state,
      open: true,
    });
  };

  const close = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const save = (data: IDataBoxInfo) => {
    setState({
      ...state,
      data: data,
      open: false,
    });
  };

  return (
    <CSS.ContentS>
      {state.open ? (
        <DataBoxOpen close={close} save={save} data={state.data} />
      ) : (
        <DataBoxClose open={open} data={state.data} />
      )}
    </CSS.ContentS>
  );
};

export default DataBox;
