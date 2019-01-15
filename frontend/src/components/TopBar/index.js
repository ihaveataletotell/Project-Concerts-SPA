import "./TopBar.scss";
import React from "react";
import SearchFieldContainer from "../SearchFieldContainer";

const TopBar = () => {
  return (
    <div className="topbar">
      <SearchFieldContainer />
    </div>
  );
};

export default TopBar;
