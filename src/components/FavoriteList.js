import React, { Component } from 'react'
import { Text, View, FlatList, ScrollView } from 'react-native'
import style from '../styles'
import { List, ListItem } from 'react-native-elements'


class FavoriteList extends Component {


  render() {
    console.log('props in favs', this.props)
    return (
      <ScrollView>
        <FlatList data={this.props.userFavorites} renderItem={ ({item}) =>
          <ListItem
            key={ item.venueId }
            title={ item.name }
            onPress={ () => this.props.getVenueDetails(item.venueId) }
          />}
        />
      </ScrollView>
    )
  }
}

export default FavoriteList
