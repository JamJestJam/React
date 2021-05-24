import { FC } from "react";
//components
import InputLabel from "Components/Common/Input/LabelInput";
import InputFile from "./InputFile";
//style
import * as CSS from "./css";
import PanelInformationsUser from "./User";
import { useSelector } from "react-redux";
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";

const PanelInformations: FC = () => {
  const { users } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));

  return (
    <CSS.ContentS>
      <CSS.ElementS>
        <CSS.TopS>Panel information's</CSS.TopS>
        <CSS.BottomS>Hourly fee</CSS.BottomS>
        <InputLabel label="" value="610&euro;/hour (Negotiated)" />
        <CSS.BottomS>Terms & conditions</CSS.BottomS>
        <InputLabel
          label=""
          value="Monthly 10k&euro; retainer - see with Seanny Smith"
        />
        <InputFile />
        <CSS.TopS>Services & projects</CSS.TopS>
        <InputLabel
          label=""
          value="Corporate M&A and internationa acquisitions"
        />
        <CSS.TopS>Internal correspondents</CSS.TopS>
        <PanelInformationsUser user={users[1]} />
        <PanelInformationsUser user={users[2]} />
      </CSS.ElementS>
    </CSS.ContentS>
  );
};

export default PanelInformations;
