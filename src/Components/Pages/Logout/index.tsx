import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, { GetPageInfoIcon } from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const Logout: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfoIcon>(getPageInfoIcon("Logout", "Logout", IconType.logout));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return <>Logout</>;
};

export default Logout;
