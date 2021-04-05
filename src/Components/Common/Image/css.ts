import styled from "styled-components";
import IImageStyle from "./IImageStyle";

const ImageS = styled.img<IImageStyle>`
    border: 1px ${(props) => (props.Bordered ? "black" : "transparent")} solid;
    max-height: ${(props) => props.MaxHeight + "px"};
    max-width: ${(props) => props.MaxWidth + "px"};
`;

export default ImageS;
