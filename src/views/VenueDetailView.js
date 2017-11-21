import React, { Component } from 'react'
import {ActivityIndicator, View, Text, Image} from 'react-native'
import style from '../styles'
import { Avatar, Button } from 'react-native-elements'

// COMPONENTS
import VenueDetailHeader from '../components/VenueDetailHeader'
import VenueContactCard from '../components/VenueContactCard'


class VenueDetailView extends Component {

  render(){
    console.log('props in venue detail view', this.props)
    // if (this.props.currentuser === undefined) {
    //   return (
    //     <View>
    //       <ActivityIndicator />
    //     </View>
    //   )
    // }

    return (
      <View>

        <VenueDetailHeader venueDetails={this.props.venueDetails} />
        <VenueContactCard venueDetails={this.props.venueDetails} />

        <Button
          large
          icon={{name: 'rocket', type: 'font-awesome'}}
          title='Add to Favorites'
          backgroundColor='rgba(15, 124, 237, 0.64)'
          borderRadius={20}
          onPress={() => this.props.addToFavorites(this.props.venueDetails)}
          />

      </View>
    )
  }

}

export default VenueDetailView
