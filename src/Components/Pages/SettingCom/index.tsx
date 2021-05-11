import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, {
  GetPageInfoIcon,
} from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const Settings: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetPageInfoIcon>(
      getPageInfoIcon("Settings", "Settings", IconType.settings)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>Settings</>;
};

export default Settings;
