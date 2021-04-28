import React, { FC } from "react";
//components
import Slider from "../../Common/HorizontalSlider";
import WorkspacesEl from "./Element";
//css
import * as CSS from "./css";
import { IconType } from "../../Common/Icon/IconType";

const Workspaces: FC = () => {
    return (
        <>
            <CSS.TitleS>Workspaces</CSS.TitleS>
            <Slider>
                <WorkspacesEl ImageName="./Image/Sample3.jpg" Icon={IconType.bell} Name="P1" Users={50} Days={5} />
                <WorkspacesEl ImageName="./Image/Sample3.jpg" Icon={IconType.arrow_down} Name="P2" Users={150} Days={10}/>
                <WorkspacesEl ImageName="./Image/Sample3.jpg" Icon={IconType.ecosystem} Name="P3" Users={250} Days={15}/>
                <WorkspacesEl ImageName="./Image/Sample3.jpg" Icon={IconType.settings} Name="P4" Users={350} Days={20}/>
                <WorkspacesEl ImageName="./Image/Sample3.jpg" Icon={IconType.entities2} Name="P5" Users={450} Days={25}/>
            </Slider>
        </>
    );
};

export default Workspaces;
