import React, { FC } from "react";
//components
import Slider from "Components/Common/HorizontalSlider";
import WorkspacesEl from "./Element";
//style
import * as CSS from "./css";
//json3
import json from "Data/Pages.json";

const Workspaces: FC = () => {
  return (
    <>
      <CSS.TitleS>Workspaces</CSS.TitleS>
      <Slider>
        {json.Workspace.map((item, i) => (
          <WorkspacesEl
            imageName={item.BgImage}
            link={item.Link}
            days={item.Days}
            users={item.Users}
            icon={item.IconID}
            name={item.Name}
            key={i}
          />
        ))}
      </Slider>
    </>
  );
};

export default Workspaces;
