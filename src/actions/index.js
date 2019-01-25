import * as api from "../api";
import * as schema from "./schema";
import { normalize } from "normalizr";

export const fetchNews = (start, end) => dispatch => {
  dispatch({
    type: "FETCH_NEWS_REQUEST"
  });
  return api
    .fetchNews(start, end)
    .then(response =>
      dispatch({
        type: "FETCH_NEWS_SUCCESS",
        response: normalize(response.data, schema.newsList)
      })
    )
    .catch(err => {
      // console.log(`%c Error: ${err.response}`, "color: red");
      dispatch({
        type: "FETCH_NEWS_FAILURE",
        response: err.response
      });
    });
};

export const updateFilter = filter => ({
  type: "UPDATE_FILTER",
  filter
});
