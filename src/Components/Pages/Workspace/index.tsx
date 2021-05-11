import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, {
  GetPageInfoIcon,
} from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const Workspace: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetPageInfoIcon>(
      getPageInfoIcon("Workspace", "Workspace", IconType.logo)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>Workspace</>;
};

export default Workspace;
