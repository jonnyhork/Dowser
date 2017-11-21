import React, { Component } from 'react'
import {ActivityIndicator, View, Text, Image} from 'react-native'
import style from '../styles'
import { Avatar } from 'react-native-elements'


class UserProfile extends Component {

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
        <View style={style.userProfile}>
          <Avatar
            large
            rounded
            source={ {uri: this.props.currentuser.photo} }
            activeOpacity={0.7}
          />
          <Text style={style.userNameText}>
            Hello, {this.props.currentuser.firstName}
          </Text>
        </View>
      </View>
    )
  }
}

export default UserProfile
