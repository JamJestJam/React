import styled from "styled-components";
import { Colors } from "../../../StyledHelpers/Colors";
import IImageStyle from "./IImageStyle";

const ImageS = styled.img<IImageStyle>`
    border: 1px ${(props) => (props.Bordered ? Colors.Shadow : "transparent")} solid;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export default ImageS;
