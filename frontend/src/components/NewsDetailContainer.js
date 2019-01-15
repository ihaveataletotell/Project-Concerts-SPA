import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsItem } from "../reducers";
import NewsList from "./NewsList";
import NewsDetail from "./NewsList/NewsDetail";

export class NewsDetailContainer extends Component {
  render() {
    const { newsItem } = this.props;
    const toNews = newsItem ? [newsItem] : [];
    return (
      <NewsList news={toNews} render={props => <NewsDetail {...props} />} />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  console.log(state, match.params.newsId);
  return {
    newsItem: getNewsItem(state, match.params.newsId)
  };
};

export default connect(
  mapStateToProps,
  null
)(NewsDetailContainer);
