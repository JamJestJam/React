import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfo from "actions/PageInfo/getPageInfo";
//data
import { IconType } from "common/Icon/IconType";
//types
type GetPageInfo = ReturnType<typeof getPageInfo>;

const Logout: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfo>(getPageInfo("Logout", "Logout", IconType.logout));
    });
    return <>Logout</>;
};

export default Logout;
