import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { Size } from "../../../styledHelpers/Size";
import { IconsEnumSvg } from "../../Common/Icon/IconsEnum";
import RoundImage from "../../Common/Image/RoundImage/RoundImage";
import Button from "../Buttons/Button";

const Content = styled.div`
    background-color: ${Colors.Bg1};
    border-radius: ${Size.Space};
    box-shadow: ${Colors.Shadow} ${Size.Shadow};
    margin: ${Size.Space} 0;
    padding-top: ${Size.Space};
`;

const Name = styled.div`
    color: ${Colors.BlueFont};
    text-align: center;
`;

const Job = styled.div`
    color: ${Colors.GrayFont};
    text-align: center;
`;

const UserData: FC = () => {
    return (
        <Content>
            <RoundImage Image="Face.jpg" alt=""/>
            <Name>Homberta Swift</Name>
            <Job>Job title - Company</Job>
            <hr />
            <Button value="Your network" Icon={IconsEnumSvg.ecosystem} SIcon={IconsEnumSvg.user_plus} />
            <Button value="Your Publications" Icon={IconsEnumSvg.publications} SIcon={IconsEnumSvg.plus} />
        </Content>
    );
};

export default UserData;
