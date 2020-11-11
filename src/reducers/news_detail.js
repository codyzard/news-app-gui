import * as types from '../constants/ActionTypes';
var initialState = {};

const news_detail = (state = initialState, action) => {
    switch(action.type){
        case types.NEWS_DETAIL:
            state = action.news_detail;
            return state;
        default: return state;
    }
}

export default news_detail;
