import { values } from "lodash";
import * as types from "./../constants/ActionTypes";
var initialState = [];

const random_latest_news = (state = initialState, action) => {
  switch (action.type) {
    case types.HOT_NEWS_IN_WEEK:
      if(action.hot_news_in_week)
      state = action.hot_news_in_week;
      return [...state];
    default:
      return [...state];
  }
};

export default random_latest_news;
