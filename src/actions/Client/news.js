import * as types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller';

export const randomLatestNewsRequest = () => {
    return (dispatch) => {
        return callApi('api/news/latest_news_from_all_categories', 'GET').then(res => {
            if (res.data) return dispatch(randomLatestNews(res.data.latest_news));
        })
    }
}
export const randomLatestNews = (random_latest_news) => {
    return {
        type: types.RANDOM_LATEST_NEWS,
        random_latest_news,
    }
}

export const hotNewsInWeekRequest = () => {
    return (dispatch) => {
        return callApi('api/news/hot_news_in_week', 'GET').then(res => {
            if (res.data) return dispatch(hotNewsInWeek(res.data.hot_news_in_week));
        })
    }
}
export const hotNewsInWeek = (hot_news_in_week) => {
    return {
        type: types.HOT_NEWS_IN_WEEK,
        hot_news_in_week,
    }
}

export const featureNewsRequest = () => {
    return (dispatch) => {
        return callApi('api/news/feature_news', 'GET').then(res => {
            if (res.data) return dispatch(featureNews(res.data.feature_news));
        })
    }
}
export const featureNews = (feature_news) => {
    return {
        type: types.FEATURE_NEWS,
        feature_news,
    }
}

export const getNewsDetailRequest = (news_id) => {
    return (dispatch) => {
        return callApi('api/news/'+ news_id, 'GET').then(res => {
            if (res.data) return dispatch(getNewsDetail(res.data.news_detail));
        })
    }
}
export const getNewsDetail = (news_detail) => {
    return {
        type: types.NEWS_DETAIL,
        news_detail,
    }
}
