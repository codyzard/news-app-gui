import { values } from 'lodash';
import * as types from './../constants/ActionTypes';
var initialState = [];

const cate_news = (state = initialState, action) => {
    switch(action.type){
        case types.GET_INIT_CATEGORIES_NEW_NEWS:
            state = [...Object.values(action.init_cate_news)];
            return [...state];
        case types.CHANGE_CATEGORIES_NEW_NEWS:
            var key = Object.keys(action.change_cate_news)[0];
            var value = Object.values(action.change_cate_news)[0];
            console.log(value)
            switch(key){
                case "Bóng đá":
                    state[0] = value;
                    return [...state];
                case "Thể thao":
                    state[1] = value;
                    return [...state];
                case "E-sports":
                    state[2] = value;
                    return [...state];
                default: return [...state];
            }
        default: return [...state];
    }
}

export default cate_news;
