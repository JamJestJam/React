import React, { FC } from "react";
import styled from 'styled-components';

import Image from './ecosystem.svg';

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
`;

const Logo: FC = () => {
  return <LogoImage src={Image} alt='Logo'/>;
};

export default Logo;
