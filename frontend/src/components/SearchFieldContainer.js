import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateFilter } from "../actions";
import SearchField from "./SearchField";
import { getNewsFilter } from "../reducers";

export class SearchFieldContainer extends Component {
  static propTypes = {
    updateFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.onSearchFieldChange = this.onSearchFieldChange.bind(this);
  }
  onSearchFieldChange = e => {
    const { updateFilter } = this.props;
    const searchStr = e.target.value;
    updateFilter(searchStr);
  };
  render() {
    const { filter } = this.props;
    return <SearchField text={filter} onChange={this.onSearchFieldChange} />;
  }
}

const mapStateToProps = state => ({
  filter: getNewsFilter(state)
});

export default connect(
  mapStateToProps,
  { updateFilter }
)(SearchFieldContainer);
