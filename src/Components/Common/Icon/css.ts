import styled from "styled-components";
import IIconStyle from "./IIconStyle";

const SIcon = styled.img<IIconStyle>`
    border: 1px ${(props) => (props.Border ? "black" : "transparent")} solid;
    height: ${(props) => props.Size};
    width: ${(props) => props.Size};
    border-radius: 5px;
`;

export default SIcon;