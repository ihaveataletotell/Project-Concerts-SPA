import "./Content.scss";
import React from "react";
import TitleBlock from "../TitleBlock";
import NewsListContainer from "../NewsListContainer";
import TopBar from "../TopBar";

function Content() {
  return (
    <main className="content">
      <TopBar />
      <TitleBlock />
      <NewsListContainer />
    </main>
  );
}

export default Content;
