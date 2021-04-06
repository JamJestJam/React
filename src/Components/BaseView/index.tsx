import React, { FC } from "react";
import LeftMenu from "../LeftMenu";
import TopBar from "../TopBar";
import { PageContentS, PageFillS } from "./css";

const BaseView: FC = (Props) => {
    return (
        <React.Fragment>
            <TopBar />
            <PageContentS>
                <LeftMenu />
                <PageFillS>{Props.children}</PageFillS>
            </PageContentS>
        </React.Fragment>
    );
};

export default BaseView;
