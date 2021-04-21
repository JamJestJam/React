import React, { FC } from "react";
//components
import BoxImage from "../../../Common/Image/Boxing";
//css
import * as CSS from "./css";

const Publication: FC = () => {
    return (
        <CSS.ContentS>
            <BoxImage
                ImageName="./Image/Sample2.jpg"
                Alt=""
                MaxHeight={80}
                MaxWidth={80}
                Margin="0"
            />
            <CSS.PublicationS>
                <CSS.PublicationTextS>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    and one more line for the demo
                </CSS.PublicationTextS>
                <CSS.PubDataS>
                    <div>7 jan. 2020 </div>
                    <BoxImage
                        ImageName="./Image/Face.jpg"
                        Alt=""
                        MaxWidth={20}
                        MaxHeight={20}
                        Rounded={true}
                        Margin="5px"
                    />
                    <CSS.NameS>Humberta Swift</CSS.NameS>
                </CSS.PubDataS>
            </CSS.PublicationS>
        </CSS.ContentS>
    );
};

export default Publication;
