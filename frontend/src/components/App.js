import "./style/App.scss";
import React, { Component } from "react";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="basic-bg" />
        <div className="primary-bg" />
        <Content />
      </div>
    );
  }
}

export default App;
