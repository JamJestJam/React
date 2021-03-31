import React, { FC } from "react";
import styled from "styled-components";
import { IconsEnumSvg } from "../../Common/Icon/IconsEnum";

import SmallIconRound from "../../Common/Icon/SmaallIconRound/SmallIconRound";
import SmallIcon from "../../Common/Icon/SmallIcon/SmallIcon";

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const IconMenu: FC = () => {
  return <Content>
    <SmallIcon image={IconsEnumSvg.house} alt="missing" />
    <SmallIconRound image={IconsEnumSvg.comments} alt="missing" value={3} />
    <SmallIconRound image={IconsEnumSvg.bell} alt="missing" value={2}/>
  </Content>;
};

export default IconMenu;
