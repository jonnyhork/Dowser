import React, { Component } from 'react'
import { ActivityIndicator, Text, View, Image, StyleSheet } from 'react-native'
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

      <View>

        <Image source={require('../../assets/background.png')} style={styles.background}/>

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    height: 671,
    width: 380

  },
})

export default UserView
