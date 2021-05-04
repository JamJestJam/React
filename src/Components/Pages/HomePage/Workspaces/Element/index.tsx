import React, { FC } from "react";
//data
import { Colors } from "style/Colors";
import { IconSize } from "common/Icon/IconSize";
import { IconType } from "common/Icon/IconType";
//components
import Icon from "common/Icon";
import BoxImage from "common/Image/Boxing";
//css
import * as CSS from "./css";
//interface
import IWorkspaceEl from "./IWorkspaceEl";

const WorkspacesEl: FC<IWorkspaceEl> = (props) => {
    return (
        <CSS.ElementS>
            <CSS.ImageS>
                <BoxImage
                    ImageName={props.ImageName}
                    Alt=""
                    Background={Colors.Bg3}
                    MaxHeight={100}
                    MaxWidth={250}
                />
            </CSS.ImageS>
            <CSS.ContentS>
                <CSS.TopS>
                    <CSS.IconBox>
                        <Icon
                            IconSize={IconSize.Large}
                            IconType={props.Icon}
                            Alt=""
                        />
                    </CSS.IconBox>
                    {props.Name}
                </CSS.TopS>
                <CSS.TransformS>
                    <CSS.InfoS>
                        <CSS.InfoS>
                            <Icon
                                IconSize={IconSize.Mini}
                                IconType={IconType.cog}
                                Alt=""
                            />
                            Contract
                        </CSS.InfoS>
                        <CSS.InfoS>
                            <Icon
                                IconSize={IconSize.Mini}
                                IconType={IconType.cog}
                                Alt=""
                            />
                            {props.Users} users
                        </CSS.InfoS>
                    </CSS.InfoS>
                    <CSS.LastS>Last update {props.Days} days ago</CSS.LastS>
                </CSS.TransformS>
            </CSS.ContentS>
        </CSS.ElementS>
    );
};

export default WorkspacesEl;
