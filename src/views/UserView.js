import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
// STYLESHEET //
import style from '../styles'

// COMPONENTS //
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
      <View style={style.buttonView}>
        <Button
          large
          icon={{name: 'map-o', type: 'font-awesome'}}
          title='Go to map'
          backgroundColor='rgba(71, 15, 237, 0.64)'
          borderRadius={20}
          onPress={() => Actions.MapView()}
          />
      </View>

    </View>
  )

}

export default UserView
