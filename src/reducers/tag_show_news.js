import * as types from '../constants/ActionTypes';
var initialState = {};

const tag_show_news = (state = initialState, action) => {
    switch(action.type){
        case types.GET_TAG_WITH_NEWS:
            state = action.news_base_tag;
            return {...state};
        case types.CLEAR_TAG_WITH_NEWS:
            state = {};
            return {...state};
        default: return state;
    }
}

export default tag_show_news;
