import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfo from "actions/PageInfo/getPageInfo";
//data
import { IconType } from "common/Icon/IconType";
//types
type GetPageInfo = ReturnType<typeof getPageInfo>;

const Entities: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfo>(
            getPageInfo("Entities", "Entities", IconType.entities)
        );
    });
    return <>Entities</>;
};

export default Entities;
