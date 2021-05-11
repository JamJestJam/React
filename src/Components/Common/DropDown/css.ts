import styled from "styled-components";
//style
import { Colors } from "StyledHelpers/Colors";
import { TriangleConent } from "StyledHelpers/Controls";
//interface
import IDropDownElement from "./IEmContent";

export const ExpanderS = styled.div`
    width: 230px;
    min-height: 10px;
    margin: 0 10px;
`;

export const ExpanderButtonS = styled(TriangleConent)<IDropDownElement>`
    box-shadow: 0px 0px 2px
        ${(props) => (props.Expanded ? Colors.Shadow : "transparent")};
    transition: 1s all;
`;

export const ContentS = styled.div<IDropDownElement>`
    position: absolute;
    background-color: ${Colors.Bg1};
    z-index: 200;
    width: 220px;
    padding: 0 5px;
    max-height: ${(props) => (props.Expanded ? props.Height : "0vh")};
    overflow-y: hidden;
    transition: 0.4s all ease-in;
    box-shadow: 0px 0px 2px ${Colors.Shadow};
`;

export const RoundS = styled.div<IDropDownElement>`
    transition: 0.3s all ease-in;
    transform: rotate(${(props) => (props.Expanded ? "180deg" : "0deg")});
`;
