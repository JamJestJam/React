import React, { FC } from "react";
import LeftMenu from "../LeftMenu";
import TopBar from "../TopBar";
import { PageContentS, PageFillS } from "./css";
import IBaseView from "./IBaseView";

const BaseView: FC<IBaseView> = (Props) => {
    return (
        <React.Fragment>
            <TopBar SiteName={Props.SiteName} Icon={Props.SiteIcon} />
            <PageContentS>
                <LeftMenu />
                <PageFillS>{Props.children}</PageFillS>
            </PageContentS>
        </React.Fragment>
    );
};

export default BaseView;
