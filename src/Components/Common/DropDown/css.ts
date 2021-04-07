import styled from "styled-components";
import { Colors } from "../../../StyledHelpers/Colors";
import { TriangleConent } from "../../../StyledHelpers/Controls";
import BoxIcon from "../Icon/Boxing";
import IDropDownElement from "./IEmContent";

export const ExpanderS = styled.div`
    width: 230px;
    min-height: 10px;
    margin: 0 10px;
`;

export const ExpanderButtonS = styled(TriangleConent)<IDropDownElement>`
    box-shadow: 0px 0px 2px
        ${(props) => (props.Expanded ? "rgba(200,200,200,0.8)" : "transparent")};
    transition: 1s all;
`;

export const ContentS = styled.div<IDropDownElement>`
    /* display: ${(props) => (props.Expanded ? "block" : "none")}; */
    position: absolute;
    background-color: ${Colors.Bg1};
    z-index: 200;
    width: 220px;
    padding: 0 5px;
    max-height: ${(props) => (props.Expanded ? "100vh" : "0vh")};
    overflow: hidden;
    transition: 1s all ease-in;
    box-shadow: 0px 0px 2px rgba(200, 200, 200, 0.8);
`;

export const RoundS = styled.div<IDropDownElement>`
    transition: 0.2s all ease-in;
    transform: rotate(${(props) => (props.Expanded ? "180deg" : "0deg")});
`;
