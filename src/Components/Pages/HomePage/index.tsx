import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfo from "Actions/PageInfo/getPageInfo";
//data
import { IconType } from "Components/Common/Icon/IconType";
//components
import Publications from "./Publications";
import ResumeYourWork from "./ResumeYourWork";
import Workspaces from "./Workspaces";
//types
type GetPageInfo = ReturnType<typeof getPageInfo>;

const HomePage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfo>(getPageInfo("home", "home", IconType.house));
    });

    return (
        <>
            <Publications />
            <Workspaces />
            <ResumeYourWork />
        </>
    );
};

export default HomePage;
