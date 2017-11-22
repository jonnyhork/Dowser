import React, { Component } from 'react'
import { ActivityIndicator, View, Image, Linking, Text } from 'react-native'
import style from '../styles'
import { Button } from 'react-native-elements'

// The Contact card will contain info (name, address, website..) from the /venues endpoint if provided.
class VenueContactCard extends Component {

  render () {
    return (
      <View style={style.venueContactView}>
        <View>

          <View>
            <Text style={style.venueContactHeader}> Status </Text>
            <Text
              style={{color: 'rgba(0,0,0,0.8)', padding: 5}}>
              {this.props.venueDetails.status}
            </Text>
          </View>

          <View>
            <Text style={style.venueContactHeader}> Address </Text>
            <Text
              style={{color: 'rgba(0,0,0,0.8)', padding: 5}}>
              {this.props.venueDetails.address[0]}
            </Text>
          </View>

          <View>
            <Text
              style={{color: 'rgba(0,0,0,0.6)', padding: 5}}
              onPress={() => Linking.openURL(this.props.venueDetails.website)}>
              {this.props.venueDetails.website}
            </Text>
          </View>

        </View>
      </View>
    )
  }
}

export default VenueContactCard
