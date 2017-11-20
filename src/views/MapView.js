import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import style from '../styles'
import { Actions } from 'react-native-router-flux'
import MapboxGL from '@mapbox/react-native-mapbox-gl'

// import Map from '../components/Map'

MapboxGL.setAccessToken('pk.eyJ1IjoiY3BsZXZhayIsImEiOiJjamExZG51OW45ZG53MnFzNGdzODkzcGo4In0.ZmhC0_CyQP21BGSOKO4UWA')

export default class MapView extends Component {



  renderAnnotations () {
    return (
      <MapboxGL.PointAnnotation
        // key={this.props.name}
        // id={this.props.name}
        // title={this.props.name}
        key='PointAnnotation'
        id='PointAnnotation'
        coordinate={this.props.mapBoxLocation}>

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <MapboxGL.Callout title='Look! An annotation!' />
      </MapboxGL.PointAnnotation>
    )
  }

  render() {
    console.log("STATE AT MAPVIEW, searchResults", this.props.searchResults)
    console.log("STATE AT MAPVIEW, allprops", this.props)
    // console.log('this is the location', this.props.mapBoxLocation)
    return (
      <View style={styles.mapContainer}>
        <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Dark}
            zoomLevel={12}
            centerCoordinate={[-105.28, 40.01]}
            style={styles.mapContainer}
            showUserLocation={true}
            animated={true}
            zoomEnabled={true}
            scrollEnabled={true}>

            <MapboxGL.PointAnnotation
              key={2}
              id={this.props.name}
              title={this.props.name}
              key='PointAnnotation'
              id='PointAnnotation'
              coordinate={[-105.28, 40.01]}>

              <View style={styles.annotationContainer}>
                <View style={styles.annotationFill2} />
              </View>
              <MapboxGL.Callout title='Look! An annotation!' />
            </MapboxGL.PointAnnotation>

        </MapboxGL.MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  annotationContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
  },
  annotationFill: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(196,109,59, 0.5)',
    transform: [{ scale: 0.6 }],
  },
  annotationFill2: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'rgba(78, 196, 59, 0.5)',
    transform: [{ scale: 0.6 }],
  }
});
