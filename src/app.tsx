import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./StyledHelpers/GlobalStyles";
import HomePage from "./Components/HomePage/";
import Profile from "./Components/Profile/";
import BaseView from "./Components/BaseView";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <BaseView>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/Profile" component={Profile} />
                </Switch>
            </BaseView>
        </Router>
    );
}

export default App;
