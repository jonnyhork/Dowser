import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import style from '../styles'
import UserProfile from '../components/UserProfile'
import FavoriteList from '../components/FavoriteList'
import SearchBar from '../components/SearchBar'

const UserView = () => {

  return (
    <View style={style.userViewContainer}>

      <View>
        <UserProfile />
      </View>
      
      <View>
        <SearchBar />
      </View>

      <View>
        <FavoriteList />
      </View>

    </View>
  )

}

export default UserView
