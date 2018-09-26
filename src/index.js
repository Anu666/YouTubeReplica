import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App.js";
import "./index.css";
import {Provider} from "react-redux";
import store from "./store"

//console.log("hello");

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById("root")
);