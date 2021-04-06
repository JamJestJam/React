import styled from "styled-components";
import IIconStyle from "./IIconStyle";

const IconS = styled.img<IIconStyle>`
    border: 1px ${(props) => (props.Border ? "black" : "transparent")} solid;
    max-height: ${(props) => props.Size};
    max-width: ${(props) => props.Size};
    border-radius: 5px;
`;

export default IconS;