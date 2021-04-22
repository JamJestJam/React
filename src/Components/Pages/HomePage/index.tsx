import React, { FC } from "react";
//components
import Publications from "./Publications";
import ResumeYourWork from "./ResumeYourWork";
import Workspaces from "./Workspaces";

const HomePage: FC = () => {
    return (
        <>
            <Publications />
            <Workspaces />
            <ResumeYourWork />
        </>
    );
};

export default HomePage;
