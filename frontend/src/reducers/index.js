import { combineReducers } from "redux";
import news, * as fromNews from "./news";

const myApp = combineReducers({
  news
});
export default myApp;

export const getNewsFilter = state => fromNews.getFilter(state.news);
export const getAllNewsArray = state => fromNews.getAllArray(state.news);
export const getFilteredNewsArray = state =>
  fromNews.getFilteredArray(state.news);
export const getIsNewsFetching = state => fromNews.getIsFetching(state.news);
export const getNewsItem = (state, id) => fromNews.getItemById(state.news, id);
export const getNewsArray = state => {
  const filter = getNewsFilter(state);
  if (!filter) {
    return getAllNewsArray(state);
  }
  return getFilteredNewsArray(state);
};
