import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

// VIEWS //
import LoginView from './views/LoginView'
import UserView from './views/UserView'
import NativeMapView from './views/NativeMapView'
import VenueDetailView from './views/VenueDetailView'
import ActivityIndicatorView from './views/ActivityIndicatorView'
// View are made up of smaller components that comprise the total view page on the screen of a users device.
// The app navigates between views.

class RouterComponent extends Component {

  render() {
   return (
      <Router>
       <Scene key="root" >
         <Scene
           key="ActivityIndicatorView"
           component={ActivityIndicatorView}
           hideNavBar
           initial
           />
         <Scene
           key="LoginView"
           component={LoginView}
           hideNavBar
           />
         <Scene
           key='UserView'
           component={UserView}
           panHandlers={null}
           title='Back'
           hideNavBar
           />
         <Scene
           key='VenueDetailView'
           component={VenueDetailView}
           title=''
           navigationBarStyle={{backgroundColor: 'rgba(255, 255, 255, 1)'}}
           />
         <Scene
           key='NativeMapView'
           component={NativeMapView}
           title={this.props.searchTerm}
           navigationBarStyle={{backgroundColor: 'rgba(117,206,182,1)'}}
           />
        </Scene>
      </Router>
    )
  }
}

export default RouterComponent
