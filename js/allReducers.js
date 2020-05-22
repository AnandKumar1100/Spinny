'Use Strict';

import { combineReducers } from 'redux';

const allReducers = () => {
    const HomeScreenReducer = require("./screens/Home/reducer/homeScreenReducer").default;

    return combineReducers({
        HomeScreenReducer
    })
};

export default allReducers;
