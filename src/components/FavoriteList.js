import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import style from '../styles'
import { List, ListItem } from 'react-native-elements'

// COMPONENTS //
import FavoriteItem from './FavoriteItem'


class FavoriteList extends Component {


  render() {
    console.log('props in favs', this.props)
    return (
      <View>
        <FlatList data={this.props.updatedFavorites ? this.props.updatedFavorites : this.props.favorites} renderItem={ ({item}) =>
          <ListItem
            key={ item.venueId }
            title={ item.name }
            onPress={ () => this.props.getVenueDetails(item.venueId) }
          />}
        />
      </View>
    )
  }
}

export default FavoriteList
