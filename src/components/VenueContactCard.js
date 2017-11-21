import React, { Component } from 'react'
import { ActivityIndicator, View, Image, Linking, Text } from 'react-native'
import style from '../styles'
import { Button } from 'react-native-elements'

class VenueContactCard extends Component {

  render () {

    console.log('card', this.props.venueDetails)
    return (
      <View style={style.venueContactView}>
        <View>

          <View>
            <Text style={style.venueContactHeader}> Status </Text>
            <Text>{this.props.venueDetails.status}</Text>
          </View>

          <View>
            <Text style={style.venueContactHeader}> Address </Text>
            <Text>{this.props.venueDetails.address[0]}</Text>
          </View>

          <View>
            <Text style={{color: 'rgba(255,255,255,1)'}} onPress={() => Linking.openURL(this.props.venueDetails.website)}>{this.props.venueDetails.website}</Text>
          </View>

        </View>
      </View>
    )
  }

}


export default VenueContactCard
