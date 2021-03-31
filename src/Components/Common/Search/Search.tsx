import React, { FC } from "react";
import styled from "styled-components";
import { IconsEnumSvg } from "../Icon/IconsEnum";

import SmallIcon from "../Icon/SmallIcon/SmallIcon";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search: FC = () => {
  return (
    <Content>
      <input type="text" placeholder="Search Legalcluster" />
      <SmallIcon image={IconsEnumSvg.search} alt="Szukaj"/>
    </Content>
  );
};

export default Search;
