import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 8,
        borderWidth: 1,
    borderRadius: 4,
    borderColor: '#379aff',
    marginRight: 16,
    marginTop: 12,
    width: (windowWidth - 48) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:1,
    },
    shadowOpacity: 0.23,
        shadowRadius: 2.62,
    elevation: 3,
    backgroundColor: 'white',
  },
  flexDirection_row: {
    flexDirection: 'row',
  },
  posterStyles: {
    height: 60,
    width: 60,
  },
  noImageTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  noImageText: {
    fontSize: 8,
    textAlign: 'center',
  },
  detailsContainer: {
    paddingLeft: 8,
    flex: 1,
  },
  title: {
    fontSize: 12,
  },
  year: {
    fontSize: 10,
  },
  shortListBtn: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingTop: 8
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 10,
    right: 10,
  },
  shortListBtnText: {
    color: '#379aff',
    fontSize: 12,
  },
});
