'Use Strict';

import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, TextInput, ActivityIndicator } from 'react-native'
import { Styles } from "./styles";
import Icon from 'react-native-vector-icons/Feather';
import MoviesTile from '../../../components/moviesTile';

export default class HomeScreen extends Component {

  saveDataToRedux = (item, index) => {
    if (this.props.shortlistedItem[index]) {
      this.props.removeItemFromRedux(index)
    } else
      this.props.saveDataToRedux({ [index]: item })
  }

  handleTextChange = (event) => {
    const searchedText = event.nativeEvent.text
    if (searchedText.length < 3) {
      alert('Enter atleast 3 characters to proceed')
    }
    else {
      this.props.fetchMoviesList(searchedText)
    }
  }

  renderSearchBar = () => {
    return (<View style={Styles.searchBarContainer}>
      <TextInput onSubmitEditing={this.handleTextChange} placeholder={'Search Movies...'} style={Styles.flex_1}/>
      <Icon name='search' size={18} color={'rgb(117, 118, 124)'} style={Styles.searchIconx} />
    </View>);
  }

  renderEmptyScreen = () => {
    return(<View style={Styles.emptyTextContainer}><Text>Search Movies to see results</Text></View>)
  }

  renderItem = ({item, index}) => {
    return (<MoviesTile
      item={item}
      shouldShowShortlistBtn={true}
      shortlistedItem={this.props.shortlistedItem}
      saveDataToRedux={this.saveDataToRedux}
      index={index}/>)
  }

  renderSeparator = () => {
    return(<View style={Styles.marginRight_16}></View>)
  }

  itemKeyExtractor = (item, index) => String(index);

  render() {
    const { moviesList, isLoading, shortlistedItem } = this.props
      return (<SafeAreaView style={Styles.fill}>
        <Text style={Styles.heading}>Home</Text>
        <View style={Styles.blueUnderline} />
        {this.renderSearchBar()}
        {isLoading ? <View style={Styles.loader}><ActivityIndicator size="large" color="#379aff" /></View> :
          <FlatList
            data={moviesList}
            extraData={shortlistedItem}
            numColumns={2}
            keyExtractor={this.itemKeyExtractor}
            contentContainerStyle={Styles.listStyles}
            renderItem={this.renderItem}
            ListEmptyComponent={this.renderEmptyScreen} />}
        </SafeAreaView>);
    }
}
