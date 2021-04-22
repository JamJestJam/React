import React, { FC } from "react";
//components
import Slider from "../../../Common/HorizontalSlider";
import WorkspacesEl from "./Element";
//css
import * as CSS from "./css";

const Workspaces: FC = () => {
    return (
        <>
            <CSS.TitleS>Workspaces</CSS.TitleS>
            <Slider>
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
                <WorkspacesEl />
            </Slider>
        </>
    );
};

export default Workspaces;
