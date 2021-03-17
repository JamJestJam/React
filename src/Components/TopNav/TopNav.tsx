import { FC } from "react";
import styled from 'styled-components';

import IconMenu from "./IconMenu/IconMenu";
import Logo from "./Logo/Logo";
import PageList from "./PageList/PageList";
import Search from "../Common/Search/Search";

const Content = styled.div`
  display: flex;
`;

const TopNav: FC = () => {
    return (
        <Content>
            <Logo />
            <PageList />
            <Search />
            <IconMenu />
        </Content>
    );
};

export default TopNav;
