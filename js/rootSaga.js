'Use Strict'

import {call,all} from 'redux-saga/effects';

export default function* rootSaga() {
    const HomeScreenWatcher = require('./screens/Home/saga/homeSaga').default;
    return yield all([
        call(HomeScreenWatcher)
    ])
}
