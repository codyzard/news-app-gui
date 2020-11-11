import * as types from "./../constants/ActionTypes";
var initialState = [];

const header_cate_news = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INIT_CATEGORIES_NEW_NEWS:
      state = [...Object.values(action.init_cate_news)[0]];
      return [...state];
    case types.MENU_CATE_NEWS:
      state = (action.header_cate_news)
      return [...state];
    default:
      return [...state];
  }
};

export default header_cate_news;
