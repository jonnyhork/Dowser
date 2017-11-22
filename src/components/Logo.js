import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import style from '../styles'

const Logo = () => {

  return (
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
