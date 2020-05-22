import { StyleSheet, Dimensions, Platform } from 'react-native';
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
        color: '#379aff',
        marginTop: Platform.OS === 'android' ? 8 : 0
    },
    blueUnderline: {
        height: 2,
        width: 12,
        backgroundColor: '#379aff',
        alignSelf: 'center'
    },
    title: {
        backgroundColor: 'rgb(240, 243, 247)',
        marginHorizontal: 16,
        padding: 16,
        marginTop: 24,
        borderRadius: 4
    },
    listStyles: {
        paddingTop: 12,
        paddingLeft: 16,
        paddingBottom: 16
    },
    marginRight_16: {
        marginRight: 16
    },
    emptyScreenContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    emptyScreenHeading: {
        fontSize: 14
    },
    emptyScreenSubHeading: {
        fontSize: 10
    }
});