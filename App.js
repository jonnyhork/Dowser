import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import style from './src/styles'
import { Button } from 'react-native-elements'

// COMPONENTS //
import Header from './src/components/Header'
import SearchBar from './src/components/SearchBar'
import FavoriteList from './src/components/FavoriteList'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentuser: null,
      latitude: null,
      longitude: null,
    }
  }

  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition( position => {
      // console.log('position****', position.coords)
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude

      this.setState({
        latitude,
        longitude,
        mapBoxLocation:[Number(longitude.toFixed(2)), Number(latitude.toFixed(2))]
      })
      console.log("***this state:",this.state)
    })
  }

  render() {
    return (
      <View style={style.logInView} >
        <SearchBar />
          <Header />
          <Button
            large
            icon={{name: 'google', type: 'font-awesome'}}
            title='Log in with google'
            backgroundColor='rgba(71, 15, 237, 0.64)'
            borderRadius={20}
            />

      </View>
    )
  }
}
