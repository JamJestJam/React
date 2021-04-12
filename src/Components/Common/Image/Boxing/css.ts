import styled from "styled-components";
import { Colors } from "../../../../StyledHelpers/Colors";
import IBoxImageStyle from "./IBoxImageStyle";

const BoxImageS = styled.div<IBoxImageStyle>`
    background-color: ${(props) =>
        props.Background ? props.Background : "Transparent"};
    box-shadow: 0 0 3px
        ${(props) => (props.Shadow ? Colors.Shadow : "transparent")};
    border-radius: ${(props) => (props.Rounded ? "100%" : "0")};
    height: ${(props) => props.Width + "px"};
    width: ${(props) => props.Height + "px"};
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin: 0 ${(props) => (props.Margin ? props.Margin : "auto")};
    display: flex;
`;

export default BoxImageS;
