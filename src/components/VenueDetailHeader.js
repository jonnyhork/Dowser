import React, { Component } from 'react'
import {ActivityIndicator, View, Text, Image} from 'react-native'
import style from '../styles'
import { Avatar } from 'react-native-elements'

class VenueDetailHeader extends Component {

  render () {

    console.log('header', this.props.venueDetails)
    return (
      <View>

        

         <Text>{this.props.venueDetails.name}</Text>

      </View>
    )
  }

}


export default VenueDetailHeader
