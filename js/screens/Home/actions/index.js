import {
    FETCH_MOVIES_LIST,
    SAVE_DATA_TO_REDUX,
    REMOVE_ITEM_FOR_REDUX
} from "./actionTypes"

export const fetchMoviesList = (searchText) => {
    return {
        type: FETCH_MOVIES_LIST,
        searchText
    }
};

export const saveDataToRedux = (item) => {
    return {
        type: SAVE_DATA_TO_REDUX,
        item
    }
}

export const removeItemFromRedux = (index) => {
    return {
        type: REMOVE_ITEM_FOR_REDUX,
        index
    }
}