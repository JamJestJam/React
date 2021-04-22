import React, { FC } from "react";
//data
import { Colors } from "../../../../../StyledHelpers/Colors";
import { IconSize } from "../../../../Common/Icon/IconSize";
import { IconType } from "../../../../Common/Icon/IconType";
//components
import Icon from "../../../../Common/Icon";
import BoxImage from "../../../../Common/Image/Boxing";
//css
import * as CSS from "./css";

const WorkspacesEl: FC = () => {
    return (
        <CSS.ElementS>
            <CSS.ImageS>
                <BoxImage
                    ImageName="./Image/Sample3.jpg"
                    Alt=""
                    Background={Colors.Bg3}
                    MaxHeight={100}
                    MaxWidth={250}
                />
            </CSS.ImageS>
            <CSS.ContentS>
                <CSS.TopS>
                    <CSS.IconBox>
                        <Icon IconSize={IconSize.Large} IconType={IconType.bell} Alt=""/>
                    </CSS.IconBox>
                    Client contract
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
                            150 users
                        </CSS.InfoS>
                    </CSS.InfoS>
                    <CSS.LastS>Last update 2 days ago</CSS.LastS>
                </CSS.TransformS>
            </CSS.ContentS>
        </CSS.ElementS>
    );
};

export default WorkspacesEl;
