import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//style
import { GlobalStyles } from "./StyledHelpers/GlobalStyles";
//components
import BaseView from "Components/Other/BaseView";
//pages
import Administration from "Components/Pages/Administration";
import Publications from "Components/Pages/Publications";
import Workspace from "Components/Pages/Workspace";
import Ecosystem from "Components/Pages/Ecosystem";
import Entities from "Components/Pages/Entities";
import Settings from "Components/Pages/SettingCom";
import HomePage from "Components/Pages/HomePage";
import Logout from "Components/Pages/Logout";
import Network from "Components/Pages/Network";
import People from "Components/Pages/People";
import Privacy from "Components/Pages/Privacy";
import Profile from "Components/Pages/Profile";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <BaseView>
        <Switch>
          <Route path="/Administration" component={Administration} exact />
          <Route path="/Publications" component={Publications} exact />
          <Route path="/Ecosystem" component={Ecosystem} exact />
          <Route path="/Entities" component={Entities} exact />
          <Route path="/Settings" component={Settings} exact />
          <Route path="/Privacy" component={Privacy} exact />
          <Route path="/Network" component={Network} exact />
          <Route path="/Profile" component={Profile} exact />
          <Route path="/Logout" component={Logout} exact />
          <Route path="/People" component={People} exact />
          <Route path="/" component={HomePage} exact />

          <Route path="/Workspace" component={Workspace} />
        </Switch>
      </BaseView>
    </Router>
  );
}

export default App;
