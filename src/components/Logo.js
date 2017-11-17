import React from 'react'
import { Text, View } from 'react-native'
import style from '../styles'


const Logo = () => {

  return (
    <View style={style.logoView}>
      <Text style={style.logoText}>Dowser</Text>
      <Text>Tagline Here</Text>
    </View>
  )
}

export default Logo
