import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
    fill: {
        flex: 1,
        backgroundColor:'white'
    },
    flex_1: {
        flex: 1
    },
    heading: {
        textAlign: 'center',
        fontSize: 14,
        color: '#379aff'
    },
    blueUnderline: {
        height: 2,
        width: 20,
        backgroundColor: '#379aff',
        alignSelf: 'center'
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listStyles: {
        flex: 1,
        paddingTop: 12,
        paddingLeft: 16
    },
    marginRight_16: {
        marginRight: 16
    },
    emptyTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    searchBarContainer: {
        backgroundColor: 'rgb(240, 243, 247)',
        paddingVertical: 16,
        paddingLeft: 16,
        paddingRight: 32,
        marginHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row'
    },
    searchIcon: {
        position: 'absolute',
        right: 16,
        top: 16
    }
});