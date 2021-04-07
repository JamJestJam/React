import styled from "styled-components";
import { Colors } from "../../../StyledHelpers/Colors";
import { TriangleConent } from "../../../StyledHelpers/Controls";
import IEmContent from "./IEmContent";

export const ExpanderS = styled.div`
    width: 200px;
    min-height: 10px;
    margin: 0 10px;
`;

export const ExpanderButtonS = styled(TriangleConent)``;

export const ContentS = styled.div<IEmContent>`
    display: ${(props) => (props.Expanded ? "block" : "none")};
    position: absolute;
    background-color: ${Colors.Bg1};
    z-index: 200;
    width: 200px;
`;
