import React, { Component } from 'react'
import {
  ActivityIndicator,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import SafariView from 'react-native-safari-view'
import {
  CLIENT_ID,
  CLIENT_SECRET,
  API_URL,
  API_URL_VENUE,
  API_DOWSER
} from 'react-native-dotenv'
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
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      this.setState({
        latitude,
        longitude,
      })
      console.log("***this state:",this.state)
      Actions.LoginView({ loginWithGoogle: this.loginWithGoogle.bind(this) })
    })

  }

  loginWithGoogle = () => {
    this.setState({
      loading: true
    })
    this.openURL(`${API_DOWSER}/auth/google`)
  }

  // THIS IS WHERE APP STATE IS SENT TO UserView //
  handleOpenURL = async ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/)
    // SET STATE WITH CURRENT USER INFO
    this.setState({
      // Decode the user string and parse it into JSON
      currentuser: JSON.parse(decodeURI(user_string)),
      loading: false
    }, () => {
      // Send oAuth response to UserView as props
      Actions.UserView({
        currentuser: this.state.currentuser,
        userFavorites: this.state.currentuser.favorites,
        callFourSquareAPI: this.callFourSquareAPI.bind(this),
        getVenueDetails: this.getVenueDetails.bind(this),
        addToFavorites: this.addToFavorites.bind(this),
        appState: this.state
      })
    })
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

    const response = await fetch(`${API_URL}?v=20171114&query=${searchTerm}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&ll=${lat},${lng}&limit=50`)
    const json = await response.json()
    const jsonArr = json.response.group.results

    this.extractInfoFromFoursquareApi(jsonArr)
  }

  extractInfoFromFoursquareApi (jsonArr) {

    const searchResults = jsonArr.map( item => {

      const longitude = Number(item.venue.location.lng)
      const latitude = Number(item.venue.location.lat)
      const checkinCount = Number(item.venue.stats.checkinsCount)
      const ratingColor = item.venue.ratingColor
      const venueId = item.venue.id

      return {
        name: item.venue.name,
        location:[latitude, longitude],
        checkinCount,
        ratingColor,
        venueId
      }
    })

    const checkinsArr = jsonArr.map( item => Number(item.venue.stats.checkinsCount) )
    const toScale = (Math.max(...checkinsArr)*0.014)

    this.setState({
        searchResults
      },() => Actions.NativeMapView({
        searchResults: this.state.searchResults,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        toScale,
        getVenueDetails: this.getVenueDetails.bind(this),
      })
    )
  }

  async getVenueDetails(venueId) {
    const response = await fetch(`${API_URL_VENUE}/${venueId}?v=20171114&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    const json = await response.json()
    const venueDetails = {
      name: json.response.venue.name,
      id: json.response.venue.id,
      photo: json.response.venue.bestPhoto ? `${json.response.venue.bestPhoto.prefix}original${json.response.venue.bestPhoto.suffix}` : null,
      description: json.response.venue.description ? json.response.venue.description : null,
      status: json.response.venue.hours ? json.response.venue.hours.status : null,
      address: json.response.venue.location.formattedAddress,
      phone: json.response.venue.contact.formattedPhone,
      website: json.response.venue ? json.response.venue.url : null,
      delivery: json.response.venue.delivery ? json.response.venue.delivery.url : null,
      checkIns: json.response.venue.stats.checkinsCount
    }
    Actions.VenueDetailView({ venueDetails, addToFavorites: this.addToFavorites.bind(this) })
  }

  async addToFavorites(details) {
    // add new favorite
    const favPost = await fetch(`${API_DOWSER}/favorites/add/${this.state.currentuser.googleID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
       },
      body: JSON.stringify({
        name: details.name,
        venueId: details.id
      })
    })
    // get favorites array back from db
    const updatedFavorites = await favPost.json()
    console.log('response from post to favorites', updatedFavorites)
    // update favorites in state and redirect to user view
    this.setState({
      userFavorites: updatedFavorites
    }, () => {
      Actions.UserView({
        userFavorites: this.state.userFavorites,
        currentuser: this.state.currentuser
      })
    })
  }


  render() {
    console.disableYellowBox = true
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
