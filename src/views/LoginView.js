import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from '../styles'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import Logo from '../components/Logo'

class LoginView extends Component {

  render() {
    return (
      <View style={style.container}>
        <Logo />
        <View style={style.buttonView}>
          <Button
            large
            icon={{name: 'google', type: 'font-awesome'}}
            title='Log in with google'
            backgroundColor='rgba(71, 15, 237, 0.64)'
            borderRadius={20}
            onPress={() => this.props.loginWithGoogle()}
            />
            {/* <Button
              large
              icon={{name: 'rocket', type: 'font-awesome'}}
              title='VenueDetailView'
              backgroundColor='rgba(15, 124, 237, 0.64)'
              borderRadius={20}
              onPress={() => Actions.VenueDetailView()}
              /> */}

        </View>
      </View>
    )
  }
}

export default LoginView
