import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from '../styles'
import { List, ListItem } from 'react-native-elements'


const FavoriteItem = ({ venue }) => {


  return (
    <View>
      <ListItem
        roundAvatar
        avatar={{}}
        key={1}
        title={venue.name}
      />
  </View>
  )
}


export default FavoriteItem

// <ListItem
//   roundAvatar
//   avatar={{}}
//   key={1}
//   title='test'
// />
