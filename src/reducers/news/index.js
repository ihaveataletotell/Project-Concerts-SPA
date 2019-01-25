import { combineReducers } from "redux";
import ids, * as fromIds from "./ids";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case "FETCH_NEWS_REQUEST":
      return true;
    case "FETCH_NEWS_SUCCESS":
    case "FETCH_NEWS_FAILURE":
      return false;
    default:
      return state;
  }
};
const byId = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_NEWS_SUCCESS":
      return {
        ...state,
        ...action.response.entities.news
      };
    case "FETCH_NEWS_REQUEST":
    case "FETCH_NEWS_FAILURE":
    default:
      return state;
  }
};
const filter = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return action.filter;
    case "CLEAR_FILTER":
      return "";
    default:
      return state;
  }
};

const news = combineReducers({
  byId,
  ids,
  isFetching,
  filter
});
export default news;

export const getItemById = (state, id) => {
  return state.byId[id];
};
const getAllIds = state => fromIds.getAllIds(state.ids);
export const getFilter = state => state.filter;

const search = (title, str) => {
  const titleLowered = title.toLowerCase();
  const strLowered = str.toLowerCase();
  return titleLowered.indexOf(strLowered);
};

const getFilteredIds = state => {
  const allIds = getAllIds(state);
  const filter = getFilter(state);
  const ids = allIds.reduce((result, id) => {
    const { title } = getItemById(state, id);
    if (~search(title, filter)) result.push(id);
    return result;
  }, []);
  return ids;
};

const getArrayByIds = (state, ids) => {
  const arr = ids.map(id => getItemById(state, id));
  return arr;
};

export const getAllArray = state => {
  return getArrayByIds(state, getAllIds(state));
};
export const getFilteredArray = state => {
  return getArrayByIds(state, getFilteredIds(state));
};
export const getIsFetching = state => state.isFetching;
