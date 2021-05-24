import { FC } from "react";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
import BoxImage from "Components/Common/Image/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//interface
import IPanelInformationsUser from "./PanelInformationsUser";
//css
import * as CSS from "./css";

const PanelInformationsUser: FC<IPanelInformationsUser> = (props) => {
  return (
    <CSS.ContentS>
      <CSS.LeftS>
        <BoxImage imageName={props.user?.photo?.url || ""} alt="" margin="0 5px 0 0" />
        <div>{props.user?.name || ""}</div>
      </CSS.LeftS>
      <CSS.RightS>
        <BoxIcon
          iconSize={IconSize.small}
          iconType={IconType.comments}
          alt=""
        />
        Message
        <BoxIcon
          iconSize={IconSize.small}
          iconType={IconType.user_plus}
          alt=""
        />
        Profile
      </CSS.RightS>
    </CSS.ContentS>
  );
};

export default PanelInformationsUser;
