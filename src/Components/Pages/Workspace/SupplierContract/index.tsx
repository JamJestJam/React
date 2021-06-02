import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, {
  GetPageInfoIcon,
} from "Actions/PageInfo/getPageInfoIcon";
//JSON
import JSON from "Data/Pages.json";
//component
import Remind from "../Remind";

const SupplierContract: FC = () => {
  const dispatch = useDispatch();
  const ele = JSON.Workspace.find((a) => a.Name === "Supplier contract");
  if (ele === undefined)
    throw new TypeError('something went wrong');

  useEffect(() => {
    dispatch<GetPageInfoIcon>(getPageInfoIcon(ele.Name, ele.Name, ele.IconID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Remind icon={ele.IconID} name={ele.Name} image={ele.BgImage} />;
};

export default SupplierContract;
