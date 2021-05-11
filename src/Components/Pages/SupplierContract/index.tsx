import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, {
  GetPageInfoIcon,
} from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const SupplierContract: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetPageInfoIcon>(
      getPageInfoIcon(
        "SupplierContract",
        "SupplierContract",
        IconType.administration
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>Supplier contract</>;
};

export default SupplierContract;
