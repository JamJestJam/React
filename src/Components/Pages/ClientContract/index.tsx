import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, {
  GetPageInfoIcon,
} from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const ClientContract: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetPageInfoIcon>(
      getPageInfoIcon(
        "ClientContract",
        "ClientContract",
        IconType.administration
      )
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return <>ClientContract</>;
};

export default ClientContract;
