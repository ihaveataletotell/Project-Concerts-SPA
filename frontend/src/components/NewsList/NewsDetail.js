import "./News.scss";
import "./NewsDetail.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const NewsDetail = ({ title, text, date, time, largeImgSrc }) => {
  return (
    <article className="news-detail">
      <div className="title news-detail__title">
        <h3 className="news-item__title">{title}</h3>
        <NavLink to="/" className="news-detail__link">
          <span className="close-button">×</span>
        </NavLink>
      </div>
      <div className="news-item__header news-detail__header">
        <span className="news-item__date news-detail__date">{date}</span>
        <span className="news-item__date news-detail__date">{time}</span>
      </div>

      <div className="news-item__body news-detail__body">
        <img className="news-detail__image" src={largeImgSrc} alt={title} />
        <p className="news-item__text news-detail__text">{text}</p>
      </div>
      {"<<some data from server>>"}
    </article>
  );
};

export default NewsDetail;
