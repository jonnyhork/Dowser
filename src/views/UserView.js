import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { API_DOWSER } from 'react-native-dotenv'
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
    console.log('props in user', this.props)
    return (

      <View style={style.userViewContainer}>

        <View>
          <UserProfile currentuser={this.props.currentuser} />
        </View>

        <View>
          <SearchBar callFourSquareAPI={this.props.callFourSquareAPI}/>
        </View>

        <View>
          <FavoriteList
            updatedFavorites={ this.props.currentuser.updatedFavorites }
            favorites={ this.props.currentuser.favorites }
            getVenueDetails={this.props.getVenueDetails}
          />
        </View>

        <View style={style.buttonView}>

        </View>

      </View>
    )
  }
}

export default UserView
