import * as types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller';
export const getAllCategoriesRequest = () => {
    return (dispatch) => {
        return callApi('api/categories', 'GET').then(res => {
            if (res.data) dispatch(getAllCategories(res.data));
        })
    }
}
export const getAllCategories = (categories) => {
    return {
        type: types.GET_ALL_CATEGORIES,
        categories,
    }
}