import styled from "styled-components";
import { Colors } from "style/Colors";
import IIconStyle from "./IIconStyle";

const IconS = styled.img<IIconStyle>`
    border: 1px ${(props) => (props.Border ? Colors.Shadow : "transparent")}
        solid;
    height: ${(props) => props.Size};
    width: ${(props) => props.Size};
    border-radius: 5px;
`;

export default IconS;
