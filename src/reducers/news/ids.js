import { combineReducers } from "redux";

const allIds = (state = [], action) => {
  switch (action.type) {
    case "FETCH_NEWS_SUCCESS":
      return [...new Set([...state, ...action.response.result])];
    default:
      return state;
  }
};

const ids = combineReducers({
  allIds
});
export default ids;

export const getAllIds = state => [...state.allIds];
