import styled from "styled-components";
import IBoxImageStyle from "./IBoxImageStyle";

const BoxImageS = styled.div<IBoxImageStyle>`
    background-color: ${(props) =>
        props.Background ? props.Background : "Transparent"};
    box-shadow: 0 0 3px ${(props) => (props.Shadow ? "black" : "transparent")};
    border-radius: ${(props) => (props.Rounded ? "100%" : "0")};
    height: ${(props) => props.Width + "px"};
    width: ${(props) => props.Height + "px"};
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
`;

export default BoxImageS;
