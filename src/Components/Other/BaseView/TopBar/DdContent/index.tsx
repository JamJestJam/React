import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import InputLabel from "Components/Common/Input/LabelInput";
import BoxIcon from "Components/Common/Icon/Boxing";
import DbContentItem from "./DdContentItem/index";
//style
import { LinkS } from "StyledHelpers/Controls";
import * as CSS from "./css";
//interface
import IUsersReducer from "Reduces/user/IUsersReducer";
import IState from "Reduces/IState";
//json
import json from "Data/Pages.json";
//functions
import compare from "Functions/compare";

const DdContent: FC = () => {
  const [state, setState] = useState({
    value: "",
  });

  const { user } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      value: event.target.value,
    });
  };

  useEffect(() => { }, [user]);

  return (
    <>
      <InputLabel
        label="Filter..."
        width={150}
        fontSize={"12"}
        change={inputChange}
      />
      <CSS.PlatformS>
        <CSS.EbSpanS>Platform</CSS.EbSpanS>
        {json.Platform.map((item, i) => {
          if (compare(item.Name, state.value)) {
            return (
              <DbContentItem
                link={item.Link}
                itemName={item.Name}
                icon={item.IconID}
                imageIconSwitch={false}
                key={i}
              />
            );
          }
          return <div key={i}></div>;
        })}
        <CSS.EbSpanS>Workspaces</CSS.EbSpanS>
        {json.Workspace.map((item, i) => {
          if (compare(item.Name, state.value)) {
            return (
              <DbContentItem
                link={item.Link}
                itemName={item.Name}
                icon={item.IconID}
                imageIconSwitch={false}
                key={i}
              />
            );
          }
          return <div key={i}></div>;
        })}
      </CSS.PlatformS>
      <CSS.EbSpanS>Account</CSS.EbSpanS>
      <DbContentItem
        link="/Profile"
        itemName={
          !user
            ? "&zwnj"
            : user?.name.length > 18
              ? user?.name.substring(0, 15) + "..."
              : user?.name
        }
        image={user?.photo?.url}
        imageIconSwitch={true}
      />
      <DbContentItem
        link="/Privacy"
        itemName={"Privacy"}
        icon={IconType.privacy}
        imageIconSwitch={false}
      />
      <DbContentItem
        link="/Settings"
        itemName={"Settings"}
        icon={IconType.settings}
        imageIconSwitch={false}
      />
      <hr />
      <LinkS to="/Logout">
        <CSS.EmLastElementS>
          <BoxIcon
            iconSize={IconSize.small}
            iconType={IconType.logout}
            alt=""
          />
          Logout
        </CSS.EmLastElementS>
      </LinkS>
    </>
  );
};

export default DdContent;
