import React, { FC } from "react";
import TopNav from "../TopNav/TopNav";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { PageContent } from "../../styledHelpers/Controls";

const HomePage: FC = () => {
  return <div>
    <TopNav/>
    <PageContent>
      <LeftMenu />
    </PageContent>
  </div>;
};

export default HomePage;
