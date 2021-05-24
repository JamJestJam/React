import React, { FC } from "react";
//data
import { colors } from "StyledHelpers/Colors";
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import Icon from "Components/Common/Icon";
import BoxImage from "Components/Common/Image/Boxing";
//style
import * as CSS from "./css";
import { LinkS } from "StyledHelpers/Controls";
//interface
import IWorkspaceEl from "./IWorkspaceEl";

const WorkspacesEl: FC<IWorkspaceEl> = (props) => {
  return (
    <LinkS to={props.link}>
      <CSS.ElementS>
        <CSS.ImageS>
          <BoxImage
            imageName={props.imageName}
            alt=""
            background={colors.Bg3}
            maxHeight={100}
            maxWidth={250}
          />
        </CSS.ImageS>
        <CSS.ContentS>
          <CSS.TopS>
            <CSS.IconBoxS>
              <Icon iconSize={IconSize.large} iconType={props.icon} alt="" />
            </CSS.IconBoxS>
            {props.name}
          </CSS.TopS>
          <CSS.TransformS>
            <CSS.InfoS>
              <CSS.InfoS>
                <Icon iconSize={IconSize.mini} iconType={IconType.cog} alt="" />
                Contract
              </CSS.InfoS>
              <CSS.InfoS>
                <Icon iconSize={IconSize.mini} iconType={IconType.cog} alt="" />
                {props.users} users
              </CSS.InfoS>
            </CSS.InfoS>
            <CSS.LastS>Last update {props.days} days ago</CSS.LastS>
          </CSS.TransformS>
        </CSS.ContentS>
      </CSS.ElementS>
    </LinkS>
  );
};

export default WorkspacesEl;
