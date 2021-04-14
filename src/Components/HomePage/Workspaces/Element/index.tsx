import React, { FC } from "react";
import { Colors } from "../../../../StyledHelpers/Colors";
import Icon from "../../../Common/Icon";
import { IconSize } from "../../../Common/Icon/IconSize";
import { IconType } from "../../../Common/Icon/IconType";
import BoxImage from "../../../Common/Image/Boxing";
import { ImageS, ElementS, ContentS, InfoS, IconBox, TransformS, LastS, TopS} from "./css";

const WorkspacesEl: FC = () => {
    return (
        <ElementS>
            <ImageS>
                <BoxImage
                    ImageName="./Image/Sample3.jpg"
                    Alt=""
                    Background={Colors.Bg3}
                    MaxHeight={100}
                    MaxWidth={250}
                />
            </ImageS>
            <ContentS>
                <TopS>
                    <IconBox>
                        <Icon IconSize={IconSize.Large} IconType={IconType.bell} Alt=""/>
                    </IconBox>
                    Client contract
                </TopS>
                <TransformS>
                    <InfoS>
                        <InfoS>
                            <Icon
                                IconSize={IconSize.Mini}
                                IconType={IconType.cog}
                                Alt=""
                            />
                            Contract
                        </InfoS>
                        <InfoS>
                            <Icon
                                IconSize={IconSize.Mini}
                                IconType={IconType.cog}
                                Alt=""
                            />
                            150 users
                        </InfoS>
                    </InfoS>
                    <LastS>Last update 2 days ago</LastS>
                </TransformS>
            </ContentS>
        </ElementS>
    );
};

export default WorkspacesEl;
