import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import style from '../styles'
import UserProfile from '../components/UserProfile'
import FavoriteList from '../components/FavoriteList'

import SearchBar from '../components/SearchBar'

import { Actions } from 'react-native-router-flux'


const UserView = () => {

  return (

    <View style={style.userViewContainer}>

    <View>

      <View>
        <UserProfile />
      </View>

      <View>
        <SearchBar />
      </View>

      <View>
        <FavoriteList />
      </View>
      <View style={style.buttonView}>
        <Button
          large
          icon={{name: 'google', type: 'font-awesome'}}
          title='Log in with google'
          backgroundColor='rgba(71, 15, 237, 0.64)'
          borderRadius={20}
          onPress={() => Actions.MapView()}
          />
      </View>

    </View>
  )

}

export default UserView
