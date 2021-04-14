import React, { FC } from "react";
import BoxImage from "../../../Common/Image/Boxing";
import { ContentS, NameS, PubDataS, PublicationS, PublicationTextS } from "./css";

const Publication: FC = () => {
    return (
        <ContentS>
            <BoxImage
                ImageName="./Image/Sample2.jpg"
                Alt=""
                MaxHeight={80}
                MaxWidth={80}
                Margin="0"
            />
            <PublicationS>
                <PublicationTextS>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    and one more line for the demo
                </PublicationTextS>
                <PubDataS>
                    <div>7 jan. 2020 </div>
                    <BoxImage
                        ImageName="./Image/Face.jpg"
                        Alt=""
                        MaxWidth={20}
                        MaxHeight={20}
                        Rounded={true}
                        Margin="5px"
                    />
                    <NameS>Humberta Swift</NameS>
                </PubDataS>
            </PublicationS>
        </ContentS>
    );
};

export default Publication;
