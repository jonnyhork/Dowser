import React from 'react'
import { Text, View } from 'react-native'
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
