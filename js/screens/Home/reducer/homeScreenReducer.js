'Use Strict';

import {
    FETCH_MOVIES_LIST,
    FETCH_MOVIES_LIST_SUCCESS,
    FETCH_MOVIES_LIST_FAILURE,
    SAVE_DATA_TO_REDUX,
    REMOVE_ITEM_FOR_REDUX
} from "../actions/actionTypes"

const initialState = {
    isLoading: false,
    error: null,
    moviesList: [],
    shortlistedItem: {},
    pageNo: 1
};

const HomeScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_LIST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_MOVIES_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                moviesList: action.data,
                pageNo: state.pageNo + 1
            }
        case FETCH_MOVIES_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case SAVE_DATA_TO_REDUX:
            return {
                ...state,
                shortlistedItem: {
                    ...state.shortlistedItem,
                    ...action.item
                }
            }
        case REMOVE_ITEM_FOR_REDUX:
            const shortlistedItem = { ...state.shortlistedItem }
            delete shortlistedItem[action.index]
            return {
                ...state,
                shortlistedItem
            }
        default:
            return state;
    }
}

export default HomeScreenReducer;