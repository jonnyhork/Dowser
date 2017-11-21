import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
// STYLESHEET //
import style from '../styles'

// COMPONENTS //
import UserProfile from '../components/UserProfile'
import FavoriteList from '../components/FavoriteList'
import SearchBar from '../components/SearchBar'

class UserView extends Component {

  render() {
    if (this.props.currentuser === undefined) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }

    return (

      <View style={style.userViewContainer}>

        <View>
          <UserProfile currentuser={this.props.currentuser} />
        </View>

        <View>
          <SearchBar callFourSquareAPI={this.props.callFourSquareAPI}/>
        </View>

        <View>
          <FavoriteList />
        </View>

        <View style={style.buttonView}>

        </View>

      </View>
    )
  }
}

export default UserView
