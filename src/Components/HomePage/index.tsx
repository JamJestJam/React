import React, { FC } from "react";
import BaseView from "../BaseView";
import Publications from "./Publications";
import ResumeYourWork from "./ResumeYourWork";
import Workspaces from "./Workspaces";

const HomePage: FC = () => {
    return <BaseView>
        <Publications />
        <Workspaces />
        <ResumeYourWork />
    </BaseView>;
};

export default HomePage;
