import React from 'react'
import { Text, View, FlatList } from 'react-native'
import style from '../styles'

const FavoriteList = () => {

  return (
    <FlatList
      data={[{key: 'Favorite One'}, {key: 'Favorite Two'}]}
      renderItem={({item}) => <Text>{item.key}</Text>}
    />
  )

}




export default FavoriteList
