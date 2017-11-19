import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import SafariView from 'react-native-safari-view'
// Imports all the views from the Router.js //
import Router from './src/Router'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentuser: null,
      latitude: null,
      longitude: null,
      loading: false
    }
  }


  async componentDidMount() {
    // OAuth
    Linking.addEventListener('url', this.handleOpenURL)
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url })
      }
    })

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
      Actions.LoginView({loginWithGoogle: this.loginWithGoogle.bind(this)})
    })

  }

  loginWithGoogle = () => {
    this.setState({
      loading: true
    })
    this.openURL('https://dowser-api.herokuapp.com/auth/google')
  }

  handleOpenURL = async ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/)
    // SET STATE WITH CURRENT USER INFO
    this.setState({
      // Decode the user string and parse it into JSON
      currentuser: JSON.parse(decodeURI(user_string)),
      loading: false
    }, () => {
      // Send oAuth response to UserView a props
      Actions.UserView({ currentuser: this.state.currentuser })
    })
    // console.log('currentuser in appjs: ', this.state.currentuser)
    if (Platform.OS === 'ios') {
      SafariView.dismiss()
    }

  }

  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      })
    }
    // Or Linking.openURL on Android
    // else {
    //   Linking.openURL(url)
    // }
  }

  async callFourSquareAPI (searchTerm) {
      const response = await fetch()
    }

  render() {
    if (this.state.loading) {
      return (
        <ActivityIndicator />
      )
    }
    return (
      <Router />
    )
  }
}
