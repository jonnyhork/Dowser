import React, { Component } from 'react'
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native'
import style from '../styles'
import { List, ListItem } from 'react-native-elements'

class FavoriteList extends Component {

  render() {

    return (
      <View style={styles.list}>
        <Text style={styles.favorites}>
          Your Favorites
        </Text>
        <ScrollView>
          <FlatList
            style={styles.listContainer}
            data={this.props.userFavorites}
            renderItem={ ({item}) =>
              <ListItem
                style={styles.listItem}
                key={item.venueId}
                title={item.name}
                onPress={ () => this.props.getVenueDetails(item.venueId) }
              />
            }
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center'
  },
  favorites: {
    marginTop: 30,
    marginLeft: 70,
    marginBottom: 10,
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 22,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontFamily: 'Avenir Next'
  },
  listContainer: {
    marginRight: 50,
    marginLeft: 50,
    marginTop: 0
  },
  listItem: {
    borderBottomWidth: 0,
  }
})

export default FavoriteList
