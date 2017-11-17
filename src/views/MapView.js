import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import style from '../styles'
import { Actions } from 'react-native-router-flux'
import MapboxGL from '@mapbox/react-native-mapbox-gl';

// import Map from '../components/Map'

MapboxGL.setAccessToken('pk.eyJ1IjoiY3BsZXZhayIsImEiOiJjamExZG51OW45ZG53MnFzNGdzODkzcGo4In0.ZmhC0_CyQP21BGSOKO4UWA');

export default class MapView extends Component<{}> {
  render() {
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
        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
});
