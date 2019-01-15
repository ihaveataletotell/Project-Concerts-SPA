import "./style/Root.scss";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
// import Test from "../api/Testapi";
import NewsDetailContainer from "./NewsDetailContainer";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Route path="/" exact component={App} />
          {/* <Route path="/testapi/" component={Test} /> */}
          <Route path="/:newsId([0-9]+)" component={NewsDetailContainer} />
        </React.Fragment>
      </Router>
    </Provider>
  );
};
export default Root;
