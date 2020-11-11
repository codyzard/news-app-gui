import * as types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller';
export const getRandomTagsRequest = () => {
    return (dispatch) => {
        return callApi('api/tags/random_tags', 'GET').then(res => {
            if (res.data) return dispatch(getRandomTags(res.data.random_tags));
        })
    }
}
export const getRandomTags = (random_tags) => {
    return {
        type: types.GET_RANDOM_TAGS,
        random_tags,
    }
}

export const getTagWithNewsRequest = (tag_id) => {
    return (dispatch) => {
        return callApi('api/tags/news_base_tag/'+tag_id, 'GET').then(res => {
            if (res.data) return dispatch(getTagWithNews(res.data.news_base_tag));
        })
    }
}
export const getTagWithNewsNextPageRequest = (tag_id, pageNumber) => {
    return (dispatch) => {
        return callApi('api/tags/news_base_tag/'+tag_id+'?page='+pageNumber, 'GET').then(res => {
            if (res.data) return dispatch(getTagWithNews(res.data.news_base_tag));
        })
    }
}
export const getTagWithNews = (news_base_tag) => {
    return {
        type: types.GET_TAG_WITH_NEWS,
        news_base_tag,
    }
}

export const clearTagWithNews = () => {
    return {
        type: types.CLEAR_TAG_WITH_NEWS,
    }
}