import React from 'react'
import { Text, View } from 'react-native'
import style from '../styles'

const Logo = () => {

  return (
    <View style={style.logoView}>
      <Text style={style.logoText}>dowser</Text>
      <Text style={style.taglineText}>tagline here</Text>
    </View>
  )
}

export default Logo
