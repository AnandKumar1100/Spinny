import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Styles } from "./styles";

export default MoviesTile = ({ shouldShowShortlistBtn, shortlistedItem, saveDataToRedux, index, item }) => {

    function handleShortlistBtn() {
        saveDataToRedux(item, index);
    }
    
    return (<View style={Styles.container}>
        <View style={Styles.flexDirection_row}>
            <View>
                {item.Poster !== 'N/A' ? <Image source={{ uri: item.Poster }} style={Styles.posterStyles} resizeMode={'contain'} /> :
                    <View style={Styles.noImageTextContainer}><Text style={Styles.noImageText}>{'Image\nnot\npresent'}</Text></View>}
            </View>
            <View style={Styles.detailsContainer}>
                <Text numberOfLines={2} style={Styles.title}>Title: {item.Title}</Text>
                <Text style={Styles.year}>Year: {item.Year}</Text>
                <Text style={Styles.year}>ImdbID: {item.imdbID}</Text>
            </View>
        </View>
        {shouldShowShortlistBtn ? <TouchableOpacity onPress={handleShortlistBtn} style={Styles.shortListBtn} hitSlop={Styles.hitSlop}>
            <Text style={Styles.shortListBtnText}>{shortlistedItem[index] ? 'D-List' : 'Shortlist'}</Text>
        </TouchableOpacity> : null}
    </View>);
}