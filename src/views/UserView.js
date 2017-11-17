import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import UserProfile from '../components/UserProfile'
import FavoriteList from '../components/FavoriteList'
import { Actions } from 'react-native-router-flux'

import style from '../styles'

const UserView = () => {

  return (
    <View>

      <View>
        <UserProfile />
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
