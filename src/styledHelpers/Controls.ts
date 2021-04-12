import styled from "styled-components";
import { Link } from "react-router-dom";

const TriangleConentChild = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
`;

export const TriangleConentLeft = styled(TriangleConentChild)`
    justify-content: flex-start;
`;
export const TriangleConentCenter = styled(TriangleConentChild)`
    justify-content: center;
`;
export const TriangleConentRight = styled(TriangleConentChild)`
    justify-content: flex-end;
`;
export const TriangleConent = styled.div`
    display: flex;
`;

export const LinkS = styled(Link)`
    color: inherit;
    text-decoration: inherit;
`;
