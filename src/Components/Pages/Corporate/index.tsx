import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, { GetPageInfoIcon } from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const Corporate: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfoIcon>(
            getPageInfoIcon("Corporate", "Corporate", IconType.administration)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return <>Corporate</>;
};

export default Corporate;