import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./StyledHelpers/GlobalStyles";
import HomePage from "./Components/HomePage/";
import Profile from "./Components/Profile/";

function App() {
    return (
        <Router>
            <React.Fragment>
                <GlobalStyles />
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/Profile" component={Profile} />
                </Switch>
            </React.Fragment>
        </Router>
    );
}

export default App;
