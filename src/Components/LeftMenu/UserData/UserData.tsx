import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { Size } from "../../../styledHelpers/Size";

const Content = styled.div`
    background-color: ${Colors.Bg1};
    width: ${Size.LefMenuWidth};
    border-radius: ${Size.Space};
    box-shadow: ${Size.Shadow} ${Colors.Shadow};
`;

const UserData: FC = () => {
    return (
        <Content>
            <div>321</div>
            <div>1235</div>
        </Content>
    );
};

export default UserData;
