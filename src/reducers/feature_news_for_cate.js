import * as types from './../constants/ActionTypes';
var initialState = [];

const feature_news_for_cate = (state = initialState, action) => {
    switch(action.type){
        case types.FEATURE_NEWS_FOR_CATE:
            state = action.feature_news_for_cate;
            return state;
        default: return state;
    }
}

export default feature_news_for_cate;
