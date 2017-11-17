import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import style from './src/styles'
import {Scene, Router} from 'react-native-router-flux'


// COMPONENTS //
import LoginView from './src/views/LoginView'
import UserView from './src/views/UserView'
// import Router from './src/Router'

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
      <Router>
        <Scene key="root">
              <Scene key="LoginView" component={LoginView} hideNavBar initial/>
              <Scene key='UserView' component={UserView} title='UserView'/>
         </Scene>
      </Router>
    )
  }
}
