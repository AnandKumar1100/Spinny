import {connect} from "react-redux";
import DetailsScreen from "../components/detailsScreen";

const mapStateToProps = state => {
    return {
        shortlistedItem: state.HomeScreenReducer.shortlistedItem
    }
}


export default connect(mapStateToProps, null)(DetailsScreen);