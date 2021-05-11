import React, { FC } from "react";
//data
import { Colors } from "StyledHelpers/Colors";
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
        <LinkS to={props.Link}>
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
        </LinkS>
    );
};

export default WorkspacesEl;
