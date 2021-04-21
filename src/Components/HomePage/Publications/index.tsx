import React, { FC } from "react";
//components
import BoxImage from "../../Common/Image/Boxing";
import Publication from "./Publication";
//css
import * as CSS from "./css";

const Publications: FC = () => {
    return (
        <CSS.ContentS>
            <CSS.LeftS>
                <BoxImage
                    ImageName="./Image/Sample1.jpg"
                    Alt=""
                    MaxWidth={300}
                    MaxHeight={300}
                />
                <CSS.PublicationS>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    and one more line for the demo
                    <CSS.PubDataS>
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
                    </CSS.PubDataS>
                </CSS.PublicationS>
            </CSS.LeftS>
            <CSS.RightS>
                <CSS.TitleS>Latest publications</CSS.TitleS>
                <CSS.TopPublicationS>
                    <Publication></Publication>
                    <Publication></Publication>
                    <Publication></Publication>
                </CSS.TopPublicationS>
                <CSS.SeeMoreS>See more publications</CSS.SeeMoreS>
            </CSS.RightS>
        </CSS.ContentS>
    );
};

export default Publications;
