import React, { FC } from "react";
//components
import BoxImage from "Components/Common/Image/Boxing";
//style
import * as CSS from "./css";
//interface
import IPublication from "./IPublication";

const Publication: FC<IPublication> = (props) => {
    return (
        <CSS.ContentS>
            <div>
                <BoxImage
                    ImageName={props.data?.photo?.url || ""}
                    Alt=""
                    MaxHeight={80}
                    MaxWidth={80}
                    Margin="0"
                />
            </div>
            <CSS.PublicationS>
                <CSS.PublicationTextS>{props.data?.body}</CSS.PublicationTextS>
                <CSS.PubDataS>
                    <div>{props.data ? "" : ""}</div>
                    <BoxImage
                        ImageName={props.data?.owner?.photo?.url || ""}
                        Alt=""
                        MaxWidth={20}
                        MaxHeight={20}
                        Rounded={true}
                        Margin="5px"
                    />
                    <CSS.NameS>{props.data?.owner?.name}</CSS.NameS>
                </CSS.PubDataS>
            </CSS.PublicationS>
        </CSS.ContentS>
    );
};

export default Publication;
