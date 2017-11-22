import React, { Component } from 'react'
import {
  ActivityIndicator,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import SafariView from 'react-native-safari-view'
import {
  CLIENT_ID,
  CLIENT_SECRET,
  API_URL,
  API_URL_VENUE,
  API_DOWSER
} from 'react-native-dotenv'
// Imports all the views from the Router.js
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
    // Get the current location of the user's device
    await navigator.geolocation.getCurrentPosition( position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      this.setState({
        latitude,
        longitude,
      })
      Actions.LoginView({ loginWithGoogle: this.loginWithGoogle.bind(this) })
    })

  }

  loginWithGoogle = () => {
    this.setState({
      loading: true
    })
    this.openURL(`${API_DOWSER}/auth/google`)
  }

  // This is where APP STATE is sent to UserView
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
  // Makes a fetch call to the Foursquare search/recommendations endpoint
  async callFourSquareAPI (searchTerm = `coffee`) {

    const lat = this.state.latitude
    const lng = this.state.longitude

    const response = await fetch(`${API_URL}?v=20171114&query=${searchTerm}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&ll=${lat},${lng}&limit=50`)
    const json = await response.json()
    const jsonArr = json.response.group.results
    // send the response to:
    this.extractInfoFromFoursquareApi(jsonArr, searchTerm)
  }
  // Parse out and format the information we want from the API response, pass the searchTearm as a prop for the navBar
  extractInfoFromFoursquareApi (jsonArr, searchTerm) {

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
    // Determine the appropiate quotient used to normalize the the radius of the map markers based on check-ins
    const checkinsArr = jsonArr.map( item => Number(item.venue.stats.checkinsCount) )
    const toScale = (Math.max(...checkinsArr)*0.014)

    this.setState({
        searchResults,
        searchTerm
      },() => Actions.NativeMapView({
        searchResults: this.state.searchResults,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        toScale,
        getVenueDetails: this.getVenueDetails.bind(this),
      })
    )
  }
  // Make a fetch call to the Foursquare /venues endpoint to get details of a specific venue, parse out the information.
  // Venue details are only available if they are provided by the venue to Foursquare.
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
    Actions.VenueDetailView({
      venueDetails,
      addToFavorites: this.addToFavorites.bind(this)
    })
  }

  async addToFavorites(details) {
    // Add new favorite to our Mongo DB hosted on Heroku and Mlab.
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
    // Get favorites array back from db.
    const updatedFavorites = await favPost.json()
    // Update favorites in state and redirect to user view.
    this.setState({
      userFavorites: updatedFavorites
    }, () => {
      Actions.UserView({
        userFavorites: this.state.userFavorites,
        currentuser: this.state.currentuser,
        getVenueDetails: this.getVenueDetails.bind(this)
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
      <Router searchTerm={this.state.searchTerm} />
    )
  }
}
