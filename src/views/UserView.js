import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import UserProfile from '../components/UserProfile'
import FavoriteList from '../components/FavoriteList'

const UserView = () => {

  return (
    <View>
    
      <View>
        <UserProfile />
      </View>

      <View>
        <FavoriteList />
      </View>

    </View>
  )

}

export default UserView
