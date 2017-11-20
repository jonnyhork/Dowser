import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import style from '../styles'
import { Actions } from 'react-native-router-flux'
import MapView from 'react-native-maps'

// `#${i.ratingColor}`

export default class NativeMapView extends Component {


  render() {
    console.log('searchResults in map', this.props.searchResults)
    console.log('mapview props', this.props)
    // console.log("User location mapview props", this.props.userLocation)
    return (

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          showsUserLocation
          showsCompass
          showsPointsOfInterest={false}
          initialRegion={{
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>

            {
              this.props.searchResults.map( i => (
              <MapView.Marker
                key={i.location[0]}
                coordinate={{
                  latitude: i.location[0],
                  longitude: i.location[1],
                }}
                title={ i.name }
                onCalloutPress={ () => this.props.getVenueDetails(i.venueId) }
                onPress={ () => console.log(i.venueId) }>

                <View style={{
                  height: (i.checkinCount/this.props.toScale),
                  width: (i.checkinCount/this.props.toScale),
                  borderWidth: 2,
                  borderColor: `#${i.ratingColor}`,
                  borderRadius: ((i.checkinCount/this.props.toScale)/2),
                  overflow: 'hidden',
                  backgroundColor: 'rgba(0, 217, 255, 0.38)'
                }} />

              </MapView.Marker>
            ))
          }
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.6)'
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },


})