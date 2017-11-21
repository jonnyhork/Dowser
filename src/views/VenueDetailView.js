import React, { Component } from 'react'
import {ActivityIndicator, View, Text, Image} from 'react-native'
import style from '../styles'
import { Avatar } from 'react-native-elements'

// COMPONENTS
import VenueDetailHeader from '../components/VenueDetailHeader'
import VenueContactCard from '../components/VenueContactCard'


class VenueDetailView extends Component {

  render(){

    // if (this.props.currentuser === undefined) {
    //   return (
    //     <View>
    //       <ActivityIndicator />
    //     </View>
    //   )
    // }

    return (
      <View>

        <VenueDetailHeader />
        <VenueContactCard />

      </View>
    )
  }

}

export default VenueDetailView
