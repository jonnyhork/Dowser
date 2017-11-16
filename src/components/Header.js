import React from 'react'
import { Text, View } from 'react-native'
import style from '../styles'


const Header = () => {

  return (
    <View style={style.headerView}>
      <Text style={style.headerText}>Dowser</Text>
    </View>
  )
}

export default Header
