import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
//components
import ClientContract from "./ClientContract";
import RealEstateContracts from "./RealEstateContracts";
import SupplierContract from "./SupplierContract";
import GroupNorms from "./GroupNorms";
import Corporate from "./Corporate";

const Workspace: FC = () => {
  return (
    <>
      <Switch>
        <Route
          path="/Workspace/RealEstateContracts"
          component={RealEstateContracts}
          exact
        />
        <Route
          path="/Workspace/SupplierContract"
          component={SupplierContract}
          exact
        />
        <Route
          path="/Workspace/ClientContract"
          component={ClientContract}
          exact
        />
        <Route path="/Workspace/GroupNorms" component={GroupNorms} exact />
        <Route path="/Workspace/Corporate" component={Corporate} exact />
      </Switch>
    </>
  );
};

export default Workspace;
