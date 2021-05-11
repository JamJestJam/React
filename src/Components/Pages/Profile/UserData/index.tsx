import { FC } from "react";
//components
import TopIcon from "./TopIcon";
import Avatar from "./Avatar";
import Info from "./Info";
//style
import * as CSS from "./css";
//data
import { IconType } from "Components/Common/Icon/IconType";

const UserData: FC = () => {
  return (
    <CSS.ElementS>
      <CSS.ContentS>
        <CSS.TopBellS>
          <TopIcon icon={IconType.comments} text="message" />
          <TopIcon icon={IconType.image_editing} text="create a request" />
          <TopIcon icon={IconType.book} text="add to claster" />
          <TopIcon icon={IconType.exit} text="" />
        </CSS.TopBellS>
        <CSS.DataContentS>
          <CSS.ProfileS>
            <Avatar />
          </CSS.ProfileS>
          <CSS.DataS>
            <Info />
          </CSS.DataS>
        </CSS.DataContentS>
      </CSS.ContentS>
    </CSS.ElementS>
  );
};

export default UserData;
