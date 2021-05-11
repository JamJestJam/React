import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, { GetPageInfoIcon } from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const Network: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfoIcon>(
            getPageInfoIcon("Network", "Network", IconType.network)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return <>Network</>;
};

export default Network;
