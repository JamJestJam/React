import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./StyledHelpers/GlobalStyles";
import SupplierContract from "./Components/SupplierContract";
import Administration from "./Components/Administration";
import ClientContract from "./Components/ClientContract";
import Publications from "./Components/Publications";
import Settings from "./Components/SettingCom";
import Workspace from "./Components/Workspace";
import Ecosystem from "./Components/Ecosystem";
import HomePage from "./Components/HomePage";
import BaseView from "./Components/BaseView";
import Entities from "./Components/Entities";
import Profile from "./Components/Profile";
import Network from "./Components/Network";
import Privacy from "./Components/Privacy";
import People from "./Components/People";
import Logout from "./Components/Logout";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <BaseView>
                <Switch>
                    <Route path="/SupplierContract" component={SupplierContract} />
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
