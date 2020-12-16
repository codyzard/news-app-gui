import * as types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller';
export const getAllCategoriesRequest = () => {
    return (dispatch) => {
        return callApi('api/categories/get_all_categories', 'GET').then(res => {
            if (res.data) return dispatch(getAllCategories(res.data.cate_news));
            // console.log(res);
        })
    }
}
export const getAllCategories = (cate_news) => {
    return {
        type: types.GET_ALL_CATEGORIES,
        cate_news,
    }
}

export const getCategoryWithNewsRequest = (category_id) => {
    return (dispatch) => {
        return callApi('api/categories/news_basein_cate/'+category_id, 'GET').then(res => {
            if (res.data) {
                dispatch(getCategoryWithNews(res.data.news_basein_cate));
                dispatch(getFeatureNewsForCate(res.data.latest_news_basein_cate));
            }
            
        })
    }
}
export const getCategoryWithNewsNextPageRequest = (category_id, pageNumber) => {
    return (dispatch) => {
        return callApi('api/categories/news_basein_cate/'+category_id+'?page='+pageNumber, 'GET').then(res => {
            if (res.data) return dispatch(getCategoryWithNews(res.data.news_basein_cate));
        })
    }
}
export const getCategoryWithNews = (data) => {
    return {
        type: types.GET_CATEGORY_WITH_NEWS,
        data,
    }
}
export const getFeatureNewsForCate = (feature_news_for_cate) => {
    return{
        type: types.FEATURE_NEWS_FOR_CATE,
        feature_news_for_cate,
    }
}