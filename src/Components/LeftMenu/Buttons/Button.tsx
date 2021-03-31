import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { Size } from "../../../styledHelpers/Size";
import { IconsEnumPng, IconsEnumSvg } from "../../Common/Icon/IconsEnum";
import SmallIcon from "../../Common/Icon/SmallIcon/SmallIcon";

interface ILeftMenuButton {
    value: string;
    Icon: IconsEnumSvg | IconsEnumPng;
    SIcon?: IconsEnumSvg | IconsEnumPng;
}

const Content = styled.div`
  display: flex;
  color: ${Colors.MainFont};
`;
const F1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
`;
const F3 = styled.div`
  display: flex;
  justify-content: right;
  width: ${Size.SmallBox};
`;

const Button: FC<ILeftMenuButton> = (props) => {
    return (
        <Content>
          <F1>
            <SmallIcon image={props.Icon} alt="" />
            {props.value}
          </F1>
            {props.SIcon && <F3><SmallIcon image={props.SIcon} alt=""/></F3>}
        </Content>
    );
};

export default Button;
