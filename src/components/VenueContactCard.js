import React, { Component } from 'react'
import { ActivityIndicator, View, Image } from 'react-native'
import style from '../styles'
import { Text } from 'react-native-elements'


// import a card from react elements??
class VenueContactCard extends Component {

  render () {


    return (
      <View style={style.venueContactView}>
        <Text h4> Contact </Text>
        <Text>This is the Contact card</Text>

      </View>
    )
  }

}


export default VenueContactCard
