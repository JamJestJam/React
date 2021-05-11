import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, { GetPageInfoIcon } from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const People: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfoIcon>(getPageInfoIcon("People", "People", IconType.people));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return <>People</>;
};

export default People;
