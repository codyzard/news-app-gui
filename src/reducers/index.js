import {combineReducers} from 'redux';
import categories from './categories';
import cate_news from './cate_news';
import header_cate_news from './header_cate_news';
import random_latest_news from './random_latest_news';
import hot_news_in_week from './hot_news_in_week';
import feature_news from './feature_news';
import category_show_news from './category_show_news';
import feature_news_for_cate from './feature_news_for_cate'
const myReducer = combineReducers({
    categories,
    cate_news,
    header_cate_news,
    random_latest_news,
    hot_news_in_week,
    feature_news,
    category_show_news,
    feature_news_for_cate,
});

export default myReducer;
