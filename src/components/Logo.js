import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import style from '../styles'

const Logo = () => {

  return (
    // <View style={style.logoView}>
    //   <Text style={style.logoText}>dowser</Text>
    //   <Text style={style.taglineText}>tagline here</Text>
    // </View>

    <Image source={require('../../assets/login.png')} style={styles.background}></Image>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    height: 671,
    width: 380

  },
})

export default Logo
