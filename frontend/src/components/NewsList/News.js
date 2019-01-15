import "./News.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const News = ({ title, date, imgSrc, text, id }) => {
  return (
    <article className="news-item">
      <div className="news-item__header">
        <NavLink to={`/${id}`} className="link news-item__title">
          <span className="title">{title}</span>
        </NavLink>
        <span className="news-item__date">{date}</span>
      </div>
      <div className="news-item__body">
        <div className="news-item__image">
          <img className="thumb" src={imgSrc} alt={title} />
        </div>
        <p className="news-item__text">{text}</p>
      </div>
    </article>
  );
};

export default News;
