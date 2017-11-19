import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
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
      <View>
        <FlatList
          data={favorites}
          renderItem={ ({item}) => <ListItem key={item.id} title={item.name} />}
        />
      </View>
    )
  }
}

export default FavoriteList
