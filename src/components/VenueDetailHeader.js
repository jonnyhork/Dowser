import React, { Component } from 'react'
import {ActivityIndicator, View, Image, Text } from 'react-native'
import style from '../styles'
import { Button } from 'react-native-elements'

// The VenueDetailHeader will display a photo and description if provided by the venue.
class VenueDetailHeader extends Component {

  render () {
    return (
      <View style={style.venueHeaderView}>

        <View style={style.shadow}>
          <Image
            style={{width: 350, height: 250}}
            source={{uri: this.props.venueDetails.photo}}
          />

          <View>
            <Text style={style.venueHeaderText} >{this.props.venueDetails.name}</Text>
          </View>

          <Text style={style.venueDecriptionText}>{this.props.venueDetails.description}</Text>
        </View>

      </View>
    )
  }

}

export default VenueDetailHeader
