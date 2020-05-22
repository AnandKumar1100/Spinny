'Use Strict';

import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native'
import { Styles } from "./styles";
import MoviesTile from '../../../components/moviesTile';

export default class DetailsScreen extends Component {

  renderEmptyScreen = () => {
    return (<View style={Styles.emptyScreenContainer}>
      <Text style={Styles.emptyScreenHeading}>No Movies Shortlisted</Text>
      <Text style={Styles.emptyScreenSubHeading}>Shortlist movies from Home to see result</Text>
    </View>)
  }

  renderItem = ({item, index}) => {
    return (<MoviesTile item={item}/>);
  }

  renderSeparator = () => {
    return(<View style={Styles.marginRight_16}></View>)
  }

  itemKeyExtractor = (item, index) => String(index);

  render() {
    const { shortlistedItem } = this.props
    return (<SafeAreaView style={Styles.fill}>
      <Text style={Styles.heading}>List</Text>
      <View style={Styles.blueUnderline} />
      <View style={Styles.title}><Text>Shortlisted Items</Text></View>
      <FlatList
        data={Object.values(shortlistedItem)}
        numColumns={2}
        keyExtractor={this.itemKeyExtractor}
        style={Styles.flex_1}
        contentContainerStyle={Styles.listStyles}
        renderItem={this.renderItem}
        ListEmptyComponent={this.renderEmptyScreen} />
    </SafeAreaView>);
    }
}
