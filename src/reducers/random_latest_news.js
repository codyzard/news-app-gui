import * as types from "./../constants/ActionTypes";
var initialState = [];

const random_latest_news = (state = initialState, action) => {
  switch (action.type) {
    case types.RANDOM_LATEST_NEWS:
      state = action.random_latest_news ? action.random_latest_news :[];      
      return [...state];
    default:
      return [...state];
  }
};

export default random_latest_news;
