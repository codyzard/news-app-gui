import { values } from "lodash";
import * as types from "./../constants/ActionTypes";
var initialState = [];

const feature_news = (state = initialState, action) => {
  switch (action.type) {
    case types.FEATURE_NEWS:
      state = action.feature_news.flat();
      return [...state];
    default:
      return [...state];
  }
};

export default feature_news;
