import React from 'react'
import {Scene, Router} from 'react-native-router-flux'

// VIEWS //
import LoginView from './views/LoginView'
import UserView from './views/UserView'
import NativeMapView from './views/NativeMapView'
import VenueDetailView from './views/VenueDetailView'
import ActivityIndicatorView from './views/ActivityIndicatorView'

const RouterComponent = () => {

 return (
   <Router>
     <Scene key="root" hideNavBar >

         <Scene key="ActivityIndicatorView" component={ActivityIndicatorView} hideNavBar initial/>
         <Scene key="LoginView" component={LoginView} hideNavBar />
         <Scene key='UserView' component={UserView} panHandlers={null} title='UserView' hideNavBar />
         <Scene key='VenueDetailView' component={VenueDetailView} title='Venue Name?' />
         <Scene key='NativeMapView' component={NativeMapView} title='NativeMapView' hideNavBar />


      </Scene>
   </Router>
 )

}

export default RouterComponent
