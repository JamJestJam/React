import styled from "styled-components";
//style
import { Colors } from "StyledHelpers/Colors";
//interface
import IImageStyle from "./IImageStyle";

const ImageS = styled.img<IImageStyle>`
    border: 1px ${(props) => (props.Bordered ? Colors.Shadow : "transparent")}
        solid;
    display: ${(props) => (props.active ? "block" : "none")};
    object-fit: cover;
    height: 100%;
    width: 100%;
`;

export default ImageS;
