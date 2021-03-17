import React, { FC } from "react";
import TopNav from "../TopNav/TopNav";
import { LeftMenu } from "../LeftMenu/LeftMenu";

const HomePage: FC = () => {
  return <div>
    <TopNav/>
    <LeftMenu />
  </div>;
};

export default HomePage;
