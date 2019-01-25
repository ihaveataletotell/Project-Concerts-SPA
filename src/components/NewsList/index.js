import React from "react";

const formatDate = date => {
  const dateObj = new Date(date);
  if (!dateObj) return "?";

  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Мая",
    "Июня",
    "Июля",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек"
  ];
  const day = dateObj.getDate();
  const monthIdx = dateObj.getMonth();
  return `${day} ${months[monthIdx]}`.toUpperCase();
};

const formatTime = date => {
  const dateObj = new Date(date);
  return dateObj.toLocaleTimeString("ru").slice(0, 5);
};

function NewsList({ news, render }) {
  return (
    <section className="news">
      {news.length !== 0 ? (
        news.map(newsItem => {
          const {
            title,
            title_thumbnail,
            concert_date,
            text,
            title_photo
          } = newsItem;
          const propsObj = {
            id: newsItem.id,
            key: newsItem.id,
            title,
            text,
            date: formatDate(concert_date),
            time: formatTime(concert_date),
            imgSrc: title_thumbnail,
            largeImgSrc: title_photo
          };
          return render(propsObj);
        })
      ) : (
        <div className="news__no-news">
          <span className="title">Нет данных для отображения</span>
          <p>Попробуйте очистить поисковый запрос или перезагрузите страницу</p>
        </div>
      )}
    </section>
  );
}
export default NewsList;
