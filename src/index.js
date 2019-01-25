import ReactDOM from "react-dom";
import React from "react";
import Root from "./components/Root";
import configureStore from "./configureStore";
// import { configureStyle } from "./postRenderConfig";

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// configureStyle();
