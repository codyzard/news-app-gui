import * as types from "./../../constants/ActionTypes";
import callApi from "./../../utils/apiCaller";

export const getNewsBySearchRequest = (keyword) => {
  return (dispatch) => {
    return callApi("api/search/news_base_keyword", "POST", {
      keyword: keyword,
    }).then((res) => {
      if (res.data) return dispatch(getNewsBySearch(res.data.news_base_search));
    });
  };
};

export const getNewsBySearchNextPageRequest = ( pageNumber) => {
  return (dispatch) => {
    return callApi("api/search/news_base_keyword?page="+pageNumber, "POST", {

    }).then((res) => {
      if (res.data) return dispatch(getNewsBySearch(res.data.news_base_search));
    });
  };
};

export const getNewsBySearch = (news_base_search) => {
  return {
    type: types.SEARCH_NEWS,
    news_base_search,
  };
};

export const clearSearchWithNews = () => {
  return {
    type: types.CLEAR_SEARCH_WITH_NEWS,
  };
};
