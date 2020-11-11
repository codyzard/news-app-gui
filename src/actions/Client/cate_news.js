import axios from 'axios';
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
export const getMenuCateLatestNewsRequest = (category_name) =>{
    return (dispatch) => {
        return callApi('api/news/hover_change_header_cate_news', 'POST', {
            category_name: category_name,
        }).then(res => {    
            if (res.data) return dispatch(getMenuCateLatestNews(res.data.header_cate_news))
        })
    }
}
export const getMenuCateLatestNews = (header_cate_news) =>{
    return{
        type: types.MENU_CATE_NEWS,
        header_cate_news
    }
}
export const cancelRequest = category_name => {
    var cancelToken = axios.CancelToken.source()
    return () => {
        axios.post('api/news/hover_change_header_cate_news',{
            category_name: category_name,
        }, {
            cancelToken: cancelToken.token
        }).then(res => {    
            console.log(res.data)
        })
    }
}