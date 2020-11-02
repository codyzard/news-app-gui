import * as types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller';


export const getInitCateNewNewsRequest = () => {
    return (dispatch) => {
        return callApi('api/news/init_cate_news', 'POST').then(res => {
            if (res.data.init_cate_news) dispatch(getInitCateNewNews(res.data.init_cate_news));
        })
    }
}
export const getInitCateNewNews = (init_cate_news) => {
    return {
        type: types.GET_INIT_CATEGORIES_NEW_NEWS,
        init_cate_news,
    }
}

export const getCateNewNewsRequest = (category_name) => {
    return (dispatch) => {
        return callApi('api/news/change_cate_news', 'POST', {
            category_name: category_name
        }).then(res => {
            if (res.data) dispatch(getCateNewNews(res.data.change_cate_news));
        })
    }
}
export const getCateNewNews = (change_cate_news) => {
    return {
        type: types.CHANGE_CATEGORIES_NEW_NEWS,
        change_cate_news,
    }
}