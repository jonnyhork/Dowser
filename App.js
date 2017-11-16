import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import style from './src/styles'


// COMPONENTS //
import Header from './src/components/Header'
import SearchBar from './src/components/SearchBar'
import FavoriteList from './src/components/FavoriteList'
import LoginPage from './src/components/LoginPage'

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
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

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
        <LoginPage />
      </View>
    )
  }
}
