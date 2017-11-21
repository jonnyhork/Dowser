import React, { Component } from 'react'
import {ActivityIndicator, View, Text, Image} from 'react-native'
import style from '../styles'
import { Avatar } from 'react-native-elements'


// import a card from react elements??
class VenueContactCard extends Component {

  render () {

    console.log('card', this.props.venueDetails)
    return (
      <View>

        <Image
          style={{width: 300, height: 300}}
          source={{uri: this.props.venueDetails.photo}} />

        <Text>{this.props.venueDetails.description}</Text>

      </View>
    )
  }

}


export default VenueContactCard
