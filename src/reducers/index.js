import {combineReducers} from 'redux';
import categories from './categories';
import cate_news from './cate_news';
import header_cate_news from './header_cate_news';
import random_latest_news from './random_latest_news';
import hot_news_in_week from './hot_news_in_week';
import feature_news from './feature_news';
import category_show_news from './category_show_news';
import feature_news_for_cate from './feature_news_for_cate';
import news_detail from './news_detail';
import tags from './tags';
import tag_show_news from './tag_show_news';
import search_show_news from './search_show_news';
const myReducer = combineReducers({
    categories,
    cate_news,
    header_cate_news,
    random_latest_news,
    hot_news_in_week,
    feature_news,
    category_show_news,
    feature_news_for_cate,
    news_detail,
    tags,
    tag_show_news,
    search_show_news,
});

export default myReducer;
