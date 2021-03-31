import React, { FC } from "react";
import styled from "styled-components";
import { Size } from "../../../styledHelpers/Size";

import LogoImg from "./logo.png";

const LogoImage = styled.img`
  margin-left: ${Size.Space};
  width: ${Size.SmallBox};
  height: ${Size.SmallBox};
`;

const Logo: FC = () => {
    return <LogoImage src={LogoImg} alt="Logo" />;
};

export default Logo;
