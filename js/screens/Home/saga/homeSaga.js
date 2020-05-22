import {put, takeLatest, select } from 'redux-saga/effects';
import {
    FETCH_MOVIES_LIST,
    FETCH_MOVIES_LIST_SUCCESS, 
    FETCH_MOVIES_LIST_FAILURE
} from '../actions/actionTypes';
import { Api } from './Api';

function* fetchMoviesList(action) {
    try {
        let pageNo = yield select((state) => state.HomeScreenReducer.pageNo);
        let resp = yield Api.fetchMoviesList(action.searchText, pageNo);
        if (resp && resp.Search) {
            yield put({ type: FETCH_MOVIES_LIST_SUCCESS, data: resp.Search });
        }
        else {
            alert('Movie not found!')
            yield put({ type: FETCH_MOVIES_LIST_FAILURE, message:'Something went wrong!!' });
        }
    } catch (err) {
        alert(err)
        yield put({ type: FETCH_MOVIES_LIST_FAILURE, message:'Something went wrong!!' });
    }
}


export default function* GSTINWatcher() {
    yield takeLatest(FETCH_MOVIES_LIST, fetchMoviesList)
}