import { FC } from "react";
//components
import TopIcon from "./TopIcon";
//style
import * as CSS from "./css";
//data
import { IconType } from "Components/Common/Icon/IconType";

const UserData: FC = () => {
  return (
    <CSS.ContentS>
      <CSS.TopBellS>
        <TopIcon icon={IconType.comments} text="message" />
        <TopIcon icon={IconType.image_editing} text="create a request" />
        <TopIcon icon={IconType.book} text="add to claster" />
        <TopIcon icon={IconType.exit} text="" />
      </CSS.TopBellS>
      <CSS.DataContentS>
        <CSS.ProfileS></CSS.ProfileS>
        <CSS.DataS></CSS.DataS>
      </CSS.DataContentS>
    </CSS.ContentS>
  );
};

export default UserData;
