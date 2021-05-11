import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, { GetPageInfoIcon } from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const Ecosystem: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfoIcon>(
            getPageInfoIcon("Ecosystem", "Ecosystem", IconType.ecosystem)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return <>Ecosystem</>;
};

export default Ecosystem;
