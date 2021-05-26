import { FC } from "react";
import { useSelector } from "react-redux";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
import BoxImage from "Components/Common/Image/Boxing";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//interface
import IPanelInformationsUser from "./PanelInformationsUser";
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";
//css
import * as CSS from "./css";

const PanelInformationsUser: FC<IPanelInformationsUser> = (props) => {
  const { users } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));
  return (
    <CSS.ContentS>
      <CSS.LeftS>
        <BoxImage
          imageName={props.user?.photo?.url || ""}
          alt=""
          margin="0 5px 0 0"
        />
        {props.id < 0 ? (
          <div>{props.user?.name || ""}</div>
        ) : (
          <select
            defaultValue={`${props.user?.id || ""}`}
            id={`data2.user${props.id}`}
            onChange={props.handleChange}
          >
            {users.map((val, i) => {
              return (
                <option key={i} value={val.id}>
                  {val.name}
                </option>
              );
            })}
          </select>
        )}
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
