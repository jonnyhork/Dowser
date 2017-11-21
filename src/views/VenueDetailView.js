import React, { Component } from 'react'
import { ActivityIndicator, View, Text, ScrollView } from 'react-native'
import style from '../styles'
import { Button } from 'react-native-elements'

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
      <ScrollView>

        <VenueDetailHeader />
        <VenueContactCard />

      </ScrollView>
    )
  }

}

export default VenueDetailView
