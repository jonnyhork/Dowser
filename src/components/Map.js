// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import MapboxGL from '@mapbox/react-native-mapbox-gl';
//
// MapboxGL.setAccessToken('pk.eyJ1IjoiY3BsZXZhayIsImEiOiJjamExZG51OW45ZG53MnFzNGdzODkzcGo4In0.ZmhC0_CyQP21BGSOKO4UWA');
//
// export default class Map extends Component {
//   render() {
//     return (
//       <View style={styles.mapContainer}>
//         <MapboxGL.MapView
//             styleURL={MapboxGL.StyleURL.Dark}
//             zoomLevel={10}
//             centerCoordinate={[-105.28, 40.01]}
//             style={styles.mapContainer}
//             showUserLocation={true}
//             animated={true}
//             zoomEnabled={true}
//             scrollEnabled={true}>
//         </MapboxGL.MapView>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   mapContainer: {
//     flex: 1,
//   },
// });


jsonArr.map( item => {
  const longitude = Number((item.venue.location.lng).toFixed(2))
  const latitude = Number((item.venue.location.lat).toFixed(2))
  const checkinCount = Number(item.venue.stats.checkinsCount)

  return {
    name: item.venue.name,
    location:[longitude, latitude],
    checkinCount

  }
})
