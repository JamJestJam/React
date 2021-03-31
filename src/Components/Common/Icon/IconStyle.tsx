import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { fontSize } from "../../../styledHelpers/Fonts";
import { Size } from "../../../styledHelpers/Size";

export const Icon = styled.img`
    width: ${Size.SmallIcon};
    height: ${Size.SmallIcon};
`;

export const Box = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${Size.SmallBox};
    height: ${Size.SmallBox};
    margin-left: ${Size.Space};
`;

export const Number = styled.div`
    background-color: ${Colors.Bg4};
    font-size: ${fontSize[10]};
    color: ${Colors.WhiteFont};
    border-radius: 100pt;
    padding: 0 ${Size.Space};
    position: absolute;
    top: 0;
    right: 0;
`;