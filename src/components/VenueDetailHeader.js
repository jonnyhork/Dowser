import React, { Component } from 'react'
import {ActivityIndicator, View, Image, Text } from 'react-native'
import style from '../styles'
import { Button } from 'react-native-elements'

class VenueDetailHeader extends Component {

  render () {
    return (
      <View style={style.venueHeaderView}>

        <View>
          <Text style={style.venueHeaderText} > Blue Bottle Coffee </Text>
        </View>

        <View style={style.shadow}>
          <Image
            style={{width: 350, height: 250}}
            source={{uri: 'https://igx.4sqi.net/img/general/original/364676_tgNSuxJ7uTY1cfDpVWEGREiJxFdEruUK70nLjXL3OUs.jpg'}}
            />

          <Text style={style.venueDecriptionText}> The coffee Mecca of the SF tech world. Cappuccino, a New Orleans iced, or a single origin drip will all serve you well. Surprisingly good breakfast. Get any egg dish, or the fruit compote. </Text>
        </View>

      </View>
    )
  }

}


export default VenueDetailHeader
