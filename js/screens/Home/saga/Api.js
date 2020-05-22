'Use Strict';

import BaseApiService from "../../../services/BaseApiServices"

function fetchMoviesList(seacrhText, page) {
    const url = `http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&s=${seacrhText}`
    return BaseApiService.get(url);
}

export const Api = {
    fetchMoviesList
};