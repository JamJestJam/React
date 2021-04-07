import styled from "styled-components";
import { Colors } from "../../StyledHelpers/Colors";
import { TriangleConent } from "../../StyledHelpers/Controls";

export const TobBarS = styled.div`
    background-color: ${Colors.Bg1};
    height: 45px;
    padding: 0 20px;
`;

export const TopBarContentS = styled(TriangleConent)`
width: 1200px;
margin: 0 auto;
`;

export const EmElementS = styled.div`
    display: flex;
    align-items: center;
`;

export const EmLastElementS = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default TobBarS;
