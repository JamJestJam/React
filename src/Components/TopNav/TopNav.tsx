import { FC } from "react";
import styled from "styled-components";

import IconMenu from "./IconMenu/IconMenu";
import Logo from "./Logo/Logo";
import Search from "../Common/Search/Search";
import { Size } from "../../styledHelpers/Size";
import { Colors } from "../../styledHelpers/Colors";
import { Link } from "react-router-dom";

const Content = styled.div`
    display: flex;
    height: ${Size.TopBarHeight};
    background-color: ${Colors.Bg1};
    box-shadow: ${Size.Shadow} ${Colors.Shadow};
    padding: 5px;
`;

const FlexLeft = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`;
const FlexCenter = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;
const FlexRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const TopNav: FC = () => {
    return (
        <Content>
            <FlexLeft>
                <Link to="/">
                    <Logo />
                </Link>
                {/* <PageList /> */}
            </FlexLeft>
            <FlexCenter>
                <Search />
            </FlexCenter>
            <FlexRight>
                <IconMenu />
            </FlexRight>
        </Content>
    );
};

export default TopNav;
