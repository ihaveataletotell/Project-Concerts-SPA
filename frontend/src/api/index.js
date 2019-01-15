import axios from "axios";

const apiURL = {
  news: "news/"
};
const domain =
  process.env.NODE_ENV === "production" ? "" : "http://127.0.0.1:8000/";

//easy to implement lazyload with get params if necessaryS
export const fetchNews = (start = 0, end = 0) => {
  const url = domain + apiURL.news + `?start=${start}&end=${end}`;
  return axios.get(url);
};
