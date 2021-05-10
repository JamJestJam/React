import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./StyledHelpers/GlobalStyles";

import SupplierContract from "Components/Pages/SupplierContract";
import Administration from "Components/Pages/Administration";
import ClientContract from "Components/Pages/ClientContract";
import Publications from "Components/Pages/Publications";
import Workspace from "Components/Pages/Workspace";
import Ecosystem from "Components/Pages/Ecosystem";
import Entities from "Components/Pages/Entities";
import Settings from "Components/Pages/SettingCom";
import BaseView from "Components/Other/BaseView";
import HomePage from "Components/Pages/HomePage";
import Logout from "Components/Pages/Logout";
import Network from "Components/Pages/Network";
import People from "Components/Pages/People";
import Privacy from "Components/Pages/Privacy";
import Profile from "Components/Pages/Profile";
import Corporate from "Components/Pages/Corporate";
import RealEstateContracts from "Components/RealEstateContracts";
import GroupNorms from "Components/Pages/GroupNorms";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <BaseView>
                <Switch>
                    <Route path="/RealEstateContracts" component={RealEstateContracts} exact/>
                    <Route path="/SupplierContract"component={SupplierContract} exact/>
                    <Route path="/Administration" component={Administration} exact/>
                    <Route path="/ClientContract" component={ClientContract} exact/>
                    <Route path="/Publications" component={Publications} exact/>
                    <Route path="/GroupNorms" component={GroupNorms} exact/>
                    <Route path="/Workspace" component={Workspace} exact/>
                    <Route path="/Ecosystem" component={Ecosystem} exact/>
                    <Route path="/Corporate" component={Corporate} exact/>
                    <Route path="/Entities" component={Entities} exact/>
                    <Route path="/Settings" component={Settings} exact/>
                    <Route path="/Privacy" component={Privacy} exact/>
                    <Route path="/Network" component={Network} exact/>
                    <Route path="/Profile" component={Profile} exact/>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/Logout" component={Logout} exact/>
                    <Route path="/People" component={People} exact/>
                </Switch>
            </BaseView>
        </Router>
    );
}

export default App;
