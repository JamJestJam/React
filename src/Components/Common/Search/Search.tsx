import React, { FC } from "react";

import SmallIcon from "../Icon/SmallIcon/SmallIcon";
import FindImg from "./search.svg";

const Search: FC = () => {
  return (
    <div>
      <input type="text" placeholder="Search Legalcluster" />
      <SmallIcon />
    </div>
  );
};

export default Search;
