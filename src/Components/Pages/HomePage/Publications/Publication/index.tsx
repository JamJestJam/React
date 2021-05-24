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
          imageName={props.data?.photo?.url || ""}
          alt=""
          maxHeight={80}
          maxWidth={80}
          margin="0"
        />
      </div>
      <CSS.PublicationS>
        <CSS.PublicationTextS>{props.data?.body}</CSS.PublicationTextS>
        <CSS.PubDataS>
          <div>{props.data ? "" : ""}</div>
          <BoxImage
            imageName={props.data?.owner?.photo?.url || ""}
            alt=""
            maxWidth={20}
            maxHeight={20}
            rounded={true}
            margin="5px"
          />
          <CSS.NameS>{props.data?.owner?.name}</CSS.NameS>
        </CSS.PubDataS>
      </CSS.PublicationS>
    </CSS.ContentS>
  );
};

export default Publication;
