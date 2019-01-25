import NewsList from "./NewsList";
import News from "./NewsList/News";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchNews } from "../actions";
import { getNewsArray } from "../reducers";

export class NewsListContainer extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired,
    fetchNews: PropTypes.func.isRequired
  };
  componentDidMount() {
    const { fetchNews } = this.props;
    fetchNews();
  }
  render() {
    const { news } = this.props;
    // console.log(news);
    return <NewsList news={news} render={props => <News {...props} />} />;
  }
}
const mapStateToProps = state => ({
  news: getNewsArray(state)
});
export default connect(
  mapStateToProps,
  { fetchNews }
)(NewsListContainer);
