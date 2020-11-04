import * as types from '../constants/ActionTypes';
var initialState = {};

const category_show_news = (state = initialState, action) => {
    switch(action.type){
        case types.GET_CATEGORY_WITH_NEWS:
            state = action.data;
            return state;
        default: return state;
    }
}

export default category_show_news;
