import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import style from '../styles'

const ActivityIndicatorView = () => {

  return (
      <View style={{
          backgroundColor: 'rgba(117, 206, 182, 1.0)',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
        }}>

        <ActivityIndicator />

      </View>
  )
}

export default ActivityIndicatorView
