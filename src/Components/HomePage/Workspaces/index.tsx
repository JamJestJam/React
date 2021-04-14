import React, { FC } from "react";
import { ElementsS, TitleS } from "./css";
import WorkspacesEl from "./Element";

const Workspaces: FC = () => {
    return (
        <div>
            <TitleS>Workspaces</TitleS>
            <ElementsS>
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
            </ElementsS>
        </div>
    );
};

export default Workspaces;
