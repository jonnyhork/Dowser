import React, { Component } from 'react'
import {ActivityIndicator, View, Image, Text } from 'react-native'
import style from '../styles'
import { Button } from 'react-native-elements'

class VenueDetailHeader extends Component {

  render () {

    console.log('header', this.props.venueDetails)
    return (
      <View style={style.venueHeaderView}>

        <View>
          <Text style={style.venueHeaderText} >{this.props.venueDetails.name}</Text>
        </View>

        <View>
          <Image
            style={{width: 350, height: 250}}
            source={{uri: this.props.venueDetails.photo}}
            />

          <Text style={style.venueDecriptionText}>{this.props.venueDetails.description}</Text>
        </View>

      </View>
    )
  }

}


export default VenueDetailHeader
