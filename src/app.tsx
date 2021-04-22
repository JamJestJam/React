import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./StyledHelpers/GlobalStyles";
import SupplierContract from "./Components/Pages/SupplierContract";
import Administration from "./Components/Pages/Administration";
import ClientContract from "./Components/Pages/ClientContract";
import Publications from "./Components/Pages/Publications";
import Settings from "./Components/Pages/SettingCom";
import Workspace from "./Components/Pages/Workspace";
import Ecosystem from "./Components/Pages/Ecosystem";
import HomePage from "./Components/Pages/HomePage";
import BaseView from "./Components/BaseView";
import Entities from "./Components/Pages/Entities";
import Profile from "./Components/Pages/Profile";
import Network from "./Components/Pages/Network";
import Privacy from "./Components/Pages/Privacy";
import People from "./Components/Pages/People";
import Logout from "./Components/Pages/Logout";

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
