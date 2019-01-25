import React, { Component } from "react";
import * as api from ".";
import * as schema from "../actions/schema";
import { normalize } from "normalizr";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }
  componentDidMount() {
    api
      .fetchNews(0, 2)
      .then(res => {
        const result = normalize(res.data, schema.newsList);
        console.dir(result);
        this.divRef.current.innerHTML = JSON.stringify(result);
      })
      .catch(err => {
        this.divRef.current.innerHTML = err.response.data;
        console.dir(err.response.data);
      });
  }
  render() {
    return <div className="Test" ref={this.divRef} />;
  }
}
