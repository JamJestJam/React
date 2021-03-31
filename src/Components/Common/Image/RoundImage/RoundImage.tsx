import { FC } from "react";
import styled from "styled-components";
import { Size } from "../../../../styledHelpers/Size";
import IImage from "../IImage";

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const ImageBox = styled.div`
    width: ${Size.MediumBox};
    height: ${Size.MediumBox};
    border-radius: 100pt;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
`;

const RoundImage: FC<IImage> = (props) => {
    return (
        <ImageBox>
            <Image src={"./Images/" + props.Image} alt={props.alt} />
        </ImageBox>
    );
};

export default RoundImage;
