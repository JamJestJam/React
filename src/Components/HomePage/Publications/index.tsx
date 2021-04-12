import React, { FC } from "react";
import BoxImage from "../../Common/Image/Boxing";
import {
    ContentS,
    LeftS,
    PubDataS,
    PublicationS,
    RightS,
    SeeMoreS,
    TitleS,
    TopPublicationS,
} from "./css";
import Publication from "./Publication";

const Publications: FC = () => {
    return (
        <ContentS>
            <LeftS>
                <BoxImage
                    ImageName="./Image/Sample1.jpg"
                    Alt=""
                    MaxWidth={300}
                    MaxHeight={300}
                />
                <PublicationS>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    and one more line for the demo
                    <PubDataS>
                        <div>7 jan. 2020 </div>
                        <BoxImage
                            ImageName="./Image/Face.jpg"
                            Alt=""
                            MaxWidth={30}
                            MaxHeight={30}
                            Rounded={true}
                            Margin="10px"
                        />
                        <div>Humberta Swift</div>
                    </PubDataS>
                </PublicationS>
            </LeftS>
            <RightS>
                <TitleS>Latest publications</TitleS>
                <TopPublicationS>
                    <Publication></Publication>
                    <Publication></Publication>
                    <Publication></Publication>
                </TopPublicationS>
                <SeeMoreS>See more publications</SeeMoreS>
            </RightS>
        </ContentS>
    );
};

export default Publications;
