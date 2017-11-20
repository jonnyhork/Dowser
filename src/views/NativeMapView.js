import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import style from '../styles'
import { Actions } from 'react-native-router-flux'
import MapView from 'react-native-maps'


export default class NativeMapView extends Component {


  render() {
    console.log('searchResults in map', this.props.searchResults)
    return (

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.01,
            longitude: -105.28,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // minZoomLevel={}
          >

          { this.props.searchResults.map(i => (
            <MapView.Marker
              coordinate={{
                latitude: i.location[1],
                longitude: i.location[0],
              }}
              title={ i.name }>

                <View style={styles.marker} />

              </MapView.Marker>

          ))  }

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
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
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
