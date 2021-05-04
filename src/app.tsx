import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./StyledHelpers/GlobalStyles";
import SupplierContract from "page/SupplierContract";
import Administration from "page/Administration";
import ClientContract from "page/ClientContract";
import Publications from "page/Publications";
import Settings from "page/SettingCom";
import Workspace from "page/Workspace";
import Ecosystem from "page/Ecosystem";
import BaseView from "other/BaseView";
import HomePage from "page/HomePage";
import Entities from "page/Entities";
import Profile from "page/Profile";
import Network from "page/Network";
import Privacy from "page/Privacy";
import People from "page/People";
import Logout from "page/Logout";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <BaseView>
                <Switch>
                    <Route
                        path="/SupplierContract"
                        component={SupplierContract}
                    />
                    <Route path="/Administration" component={Administration} />
                    <Route path="/ClientContract" component={ClientContract} />
                    <Route path="/Publications" component={Publications} />
                    <Route path="/Workspace" component={Workspace} />
                    <Route path="/Ecosystem" component={Ecosystem} />
                    <Route path="/Entities" component={Entities} />
                    <Route path="/Settings" component={Settings} />
                    <Route path="/Privacy" component={Privacy} />
                    <Route path="/Network" component={Network} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/" component={HomePage} exact />
                    <Route path="/Logout" component={Logout} />
                    <Route path="/People" component={People} />
                </Switch>
            </BaseView>
        </Router>
    );
}

export default App;
