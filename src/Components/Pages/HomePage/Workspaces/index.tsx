import React, { FC } from 'react';
//components
import Slider from '../../Common/HorizontalSlider';
import WorkspacesEl from './Element';
//css
import * as CSS from './css';
//json3
import json from '../../../Data/Pages.json';

const Workspaces: FC = () => {
  return (
    <>
      <CSS.TitleS>Workspaces</CSS.TitleS>
      <Slider>
        {json.Workspace.map((item, i) => (
          <WorkspacesEl
            ImageName={item.BgImage}
            Days={item.Days}
            Users={item.Users}
            Icon={item.IconID}
            Name={item.Name}
            key={i}
          />
        ))}
      </Slider>
    </>
  );
};

export default Workspaces;
