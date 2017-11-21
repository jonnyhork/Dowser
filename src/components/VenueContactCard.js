import React, { Component } from 'react'
import { ActivityIndicator, View, Image, Text } from 'react-native'
import style from '../styles'
import { Button } from 'react-native-elements'

class VenueContactCard extends Component {

  render () {

    console.log('card', this.props.venueDetails)
    return (
      <View style={style.venueContactView}>
        <Text style={style.venueContactHeader}> Contact </Text>
        <View style={style.shadow}>
          <View>
            <Text style={style.venueContactHeader}> Hours </Text>
            <Text>These are the hours, her is some more text for he card</Text>
          </View>

          <View>
            <Text style={style.venueContactHeader}> Website </Text>
            <Text> Website link </Text>
          </View>

          <View>
            <Text style={style.venueContactHeader}> Address </Text>
            <Text> This is the address</Text>
          </View>
        </View>
      </View>
    )
  }

}


export default VenueContactCard
