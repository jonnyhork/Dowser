import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import style from '../styles'
import { List, ListItem } from 'react-native-elements'

// COMPONENTS //
import FavoriteItem from './FavoriteItem'

const favorites = [
  {
    id: 1,
    name: "Scarr's Pizza",
    avatar_url: 'https://igx.4sqi.net/img/general/173774_KwI1uQ6cp_ayifvMYJs8GDdSK-zlHbcBLDy7hEQ-KH0.jpg',
    subtitle: 'Pizza'
  },
  {
    id: 2,
    name: "Scarr's Pizza",
    avatar_url: 'https://igx.4sqi.net/img/general/173774_KwI1uQ6cp_ayifvMYJs8GDdSK-zlHbcBLDy7hEQ-KH0.jpg',
    subtitle: 'Pizza'
  },
  { id: 2,
    name: "Scarr's Pizza",
    avatar_url: 'https://igx.4sqi.net/img/general/173774_KwI1uQ6cp_ayifvMYJs8GDdSK-zlHbcBLDy7hEQ-KH0.jpg',
    subtitle: 'Pizza'
  },
  {
    name: 'Box Car',
    avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
    subtitle: 'Coffee'
  },
  // {
  //   name: 'Box Car',
  //   avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
  //   subtitle: 'Coffee'
  // },
  // {
  //   name: 'Box Car',
  //   avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
  //   subtitle: 'Coffee'
  // },
  // {
  //   name: 'Box Car',
  //   avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
  //   subtitle: 'Coffee'
  // },
  // {
  //   name: 'Box Car',
  //   avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
  //   subtitle: 'Coffee'
  // },
  // {
  //   name: 'Box Car',
  //   avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
  //   subtitle: 'Coffee'
  // },
  // {
  //   name: 'Box Car',
  //   avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
  //   subtitle: 'Coffee'
  // }
]

class FavoriteList extends Component {

  // renderItem(venue){
  //   return (
  //     <ListItem key={item.id} title={item.name} />
  //   )
  // }

  render() {
    return (
      <View style={styles.list}>
        <Text style={styles.favorites}>
          Your Favorites
        </Text>
        <FlatList
          style={styles.listContainer}
          data={favorites}
          renderItem={ ({item}) => <ListItem containerStyle={styles.listItem} key={item.id} title={item.name} />}
        />
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
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  listContainer: {
    marginRight: 50,
    marginLeft: 50,
    marginTop: 0
  },
  listItem: {
    borderBottomWidth: 0
  },
})

export default FavoriteList
