import {connect} from "react-redux";
import HomeScreen from "../components/homeScreen";
import { fetchMoviesList, saveDataToRedux, removeItemFromRedux } from '../actions';

const mapStateToProps = state => {
    return {
        isLoading: state.HomeScreenReducer.isLoading,
        moviesList: state.HomeScreenReducer.moviesList,
        shortlistedItem: state.HomeScreenReducer.shortlistedItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesList: (searchText) => {
            dispatch(fetchMoviesList(searchText));
        },
        saveDataToRedux: (item) => {
            dispatch(saveDataToRedux(item))
        },
        removeItemFromRedux: (index) => {
            dispatch(removeItemFromRedux(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);