import React from 'react'
import { Text, View } from 'react-native'
import style from '../styles'
import { Actions, Button } from 'react-native-elements'

import Logo from '../components/Logo'

const LoginView = () => {

  return (
    <View style={style.logoView}>
      <Logo />
      <Button
        large
        icon={{name: 'google', type: 'font-awesome'}}
        title='Log in with google'
        backgroundColor='rgba(71, 15, 237, 0.64)'
        borderRadius={20}
        onPress={() => Actions.UserView() }
        />
    </View>
  )
}

export default LoginView
