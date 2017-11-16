import React from 'react'
import { Text, View } from 'react-native'
import style from '../styles'
import { Button } from 'react-native-elements'


const LoginPage = () => {

  return (
    <View style={style.headerView}>
      <Text style={style.headerText}>Dowser</Text>
      <Button
        large
        icon={{name: 'google', type: 'font-awesome'}}
        title='Log in with google'
        backgroundColor='rgba(71, 15, 237, 0.64)'
        borderRadius={20}
        />
    </View>
  )
}

export default LoginPage
