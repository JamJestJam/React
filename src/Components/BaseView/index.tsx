import React, { FC } from "react";
import LeftMenu from "../LeftMenu";
import TopBar from "../TopBar";
import { PageContent } from "./css";

const BaseView: FC = (Props) => {
    return (
        <React.Fragment>
            <TopBar />
            <PageContent>
                <LeftMenu />
                {Props.children}
            </PageContent>
        </React.Fragment>
    );
};

export default BaseView;
