import React, { FC } from "react";
import { createGlobalStyle } from "styled-components";
import HomePage from "./Components/HomePage/HomePage";
import { Colors } from "./styledHelpers/Colors";
import { Size } from "./styledHelpers/Size";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import { PageContent } from "./styledHelpers/Controls";
import { LeftMenu } from "./Components/LeftMenu/LeftMenu";
import Profile from "./Components/Profile/Profile";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.Bg2}; 
    margin: ${Size.Space};
  }
`;

const App: FC = () => {
    return (
        <Router>
            <React.Fragment>
                <GlobalStyle />
                <TopNav />
                <PageContent>
                    <LeftMenu />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/profil" component={Profile} />
                    </Switch>
                </PageContent>
            </React.Fragment>
        </Router>
    );
};

export default App;
