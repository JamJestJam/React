import React, { FC } from "react";

import SmallIconRound from "../../Common/Icon/SmaallIconRound/SmallIconRound";
import SmallIcon from "../../Common/Icon/SmallIcon/SmallIcon";

import bellIcon from 'bell.svg';
import homeIcon from 'house.svg';
import commentIcon from 'comments.svg';

const IconMenu: FC = () => {
  return <div>
    <SmallIcon />
    <SmallIconRound />
    <SmallIconRound />
  </div>;
};

export default IconMenu;
