import {combineReducers} from 'redux';
import categories from './categories'
import cate_news from './cate_news'
const myReducer = combineReducers({
    categories,
    cate_news,
});

export default myReducer;
