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
import { CLIENT_ID, CLIENT_SECRET, API_URL } from 'react-native-dotenv'

// Imports all the views from the Router.js //
import Router from './src/Router'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentuser: null,
      latitude: null,
      longitude: null,
      loading: false,
      searchResults: null
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
      // console.log(this.state.mapBoxLocation)
      Actions.LoginView({loginWithGoogle: this.loginWithGoogle.bind(this)})
    })

  }

  loginWithGoogle = () => {
    this.setState({
      loading: true
    })
    this.openURL('https://dowser-api.herokuapp.com/auth/google')
  }

  // THIS IS WERE APP STATE IS SENT TO UserView //
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
      Actions.UserView({
        currentuser: this.state.currentuser,
        callFourSquareAPI: this.callFourSquareAPI.bind(this),
        appState: this.state
      })
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

  async callFourSquareAPI (searchTerm = `coffee`) {
    console.log('the searchTerm before the API call is:', searchTerm)
    // ll=${lat},${lng}
    const lat = this.state.latitude
    const lng = this.state.longitude

    const response = await fetch(`${API_URL}?v=20171114&query=${searchTerm}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&near=boulder,co&limit=50`)
    const json = await response.json()
    // console.log('this is the json response:', json)
    const jsonArr = json.response.group.results

    this.extractInfoFromFoursquareApi(jsonArr)
  }

  extractInfoFromFoursquareApi (jsonArr) {

    const searchResults = jsonArr.map( item => {

      const longitude = Number((item.venue.location.lng).toFixed(2))
      const latitude = Number((item.venue.location.lat).toFixed(2))
      const checkinCount = Number(item.venue.stats.checkinsCount)

      return {
        name: item.venue.name,
        location:[longitude, latitude],
        checkinCount
      }
    })
    this.setState({
        searchResults
      },() => Actions.MapView({searchResults: this.state.searchResults})
    )
    // console.log(`this.STATE SEARCH RESULTS in APP.js`, this.state.searchResults)
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
