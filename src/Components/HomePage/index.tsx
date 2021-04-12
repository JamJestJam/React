import React, { FC } from "react";
import BaseView from "../BaseView";
import { IconType } from "../Common/Icon/IconType";
import Publications from "./Publications";
import ResumeYourWork from "./ResumeYourWork";
import Workspaces from "./Workspaces";

const HomePage: FC = () => {
    return (
        <BaseView SiteName="Home" SiteIcon={IconType.house}>
            <Publications />
            <Workspaces />
            <ResumeYourWork />
        </BaseView>
    );
};

export default HomePage;
