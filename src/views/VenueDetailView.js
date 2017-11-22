import React, {Component} from 'react'
import {ActivityIndicator, View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import style from '../styles'
import {Button} from 'react-native-elements'

// COMPONENTS
import VenueDetailHeader from '../components/VenueDetailHeader'
import VenueContactCard from '../components/VenueContactCard'

class VenueDetailView extends Component {

  render() {
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
        <Image source={require('../../assets/venueView.png')} style={style.background}/>

        <ScrollView>

          <VenueDetailHeader venueDetails={this.props.venueDetails}/>
          <VenueContactCard venueDetails={this.props.venueDetails}/>

          <Button large icon={{
            name: 'rocket',
            type: 'font-awesome'
          }} title='Add to Favorites' buttonStyle={styles.favoriteButton} backgroundColor='rgba(117,206,182,0.5)' borderRadius={20} onPress={() => this.props.addToFavorites(this.props.venueDetails)}/>

        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  favoriteButton: {
    padding: 10,
    marginTop: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height:1 },
    shadowOpacity: 0.2
  }
})

export default VenueDetailView
