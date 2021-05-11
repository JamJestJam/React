//react
import React from "react";
import ReactDOM from "react-dom";
//redux
import { Provider } from "react-redux";
//store
import store from "Tools/store";
//app
import App from "./app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
