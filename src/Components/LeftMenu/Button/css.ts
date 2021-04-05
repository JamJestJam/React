import styled from "styled-components";
import { Colors } from "../../../StyledHelpers/Colors";
import { IconSize } from "../../Common/Icon/IconSize";


export const ButtonS = styled.div`
    color: ${Colors.MainFont};
    cursor: pointer;
    display: flex;
`;

export const ButtonLeftS = styled.div`
    justify-content: left;
    align-items: center;
    display: flex;
    flex: 1;
`

export const ButtonRightS = styled.div`
    width: ${IconSize.Small};
    justify-content: right;
    align-items: center;
    display: flex;
`;