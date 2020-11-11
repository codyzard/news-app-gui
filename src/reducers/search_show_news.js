import * as types from '../constants/ActionTypes';
var initialState = {};

const search_show_news = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_NEWS:
            state = action.news_base_search;
            return state;
        case types.CLEAR_SEARCH_WITH_NEWS:
            state = {};
            return state;
        default: return state;
    }
}

export default search_show_news;
