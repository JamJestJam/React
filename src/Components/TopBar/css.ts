import styled from "styled-components";
import { Colors } from "../../StyledHelpers/Colors";
import { TriangleConent } from "../../StyledHelpers/Controls";

export const TobBarS = styled(TriangleConent)`
    background-color: ${Colors.Bg1};
    height: 45px;
    padding: 0 20px;
`;

export const EmElementS = styled.div`
    display: flex;
    align-items: center;
`;

export default TobBarS;
