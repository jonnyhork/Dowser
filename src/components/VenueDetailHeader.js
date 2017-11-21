import React, { Component } from 'react'
import {ActivityIndicator, View, Text, Image} from 'react-native'
import style from '../styles'
import { Avatar } from 'react-native-elements'

class VenueDetailHeader extends Component {

  render () {
    return (
      <View>
        <View>
          <Text>Blue Bottle Coffee</Text>
        </View>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://igx.4sqi.net/img/general/original/364676_tgNSuxJ7uTY1cfDpVWEGREiJxFdEruUK70nLjXL3OUs.jpg'}}
          />

      <View>
          <Text>This is the detial header</Text>

        </View>

      </View>
    )
  }

}


export default VenueDetailHeader
