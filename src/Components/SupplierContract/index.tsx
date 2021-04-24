import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfo from "../../Actions/PageInfo/getPageInfo";
//data
import { IconType } from "../Common/Icon/IconType";
//types
type GetPageInfo = ReturnType<typeof getPageInfo>;
const SupplierContract: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfo>(getPageInfo("SupplierContract", "SupplierContract", IconType.logo));
    });
    return <>Supplier contract</>;
};

export default SupplierContract;
