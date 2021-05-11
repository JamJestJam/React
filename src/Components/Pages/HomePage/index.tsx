import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, { GetPageInfoIcon } from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";
//components
import Publications from "./Publications";
import ResumeYourWork from "Components/Other/ResumeYourWork";
import Workspaces from "./Workspaces";

const HomePage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfoIcon>(getPageInfoIcon("home", "home", IconType.house));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <>
            <Publications />
            <Workspaces />
            <ResumeYourWork />
        </>
    );
};

export default HomePage;
