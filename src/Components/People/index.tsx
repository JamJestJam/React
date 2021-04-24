import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfo from "../../Actions/PageInfo/getPageInfo";
//data
import { IconType } from "../Common/Icon/IconType";
//types
type GetPageInfo = ReturnType<typeof getPageInfo>;

const People: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfo>(getPageInfo("People", "People", IconType.people));
    });
    return <>People</>;
};

export default People;
