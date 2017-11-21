import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'

// VIEWS //
import LoginView from './views/LoginView'
import UserView from './views/UserView'
import NativeMapView from './views/NativeMapView'
import VenueDetailView from './views/VenueDetailView'
import ActivityIndicatorView from './views/ActivityIndicatorView'

class RouterComponent extends Component {


render() {
 return (
   <Router>
     <Scene key="root" >

         <Scene key="ActivityIndicatorView" component={ActivityIndicatorView} hideNavBar initial/>
         <Scene key="LoginView" component={LoginView} hideNavBar />
         <Scene key='UserView' component={UserView} panHandlers={null} title='Back' hideNavBar />
         <Scene key='VenueDetailView' component={VenueDetailView} title='Dowser' />
         <Scene key='NativeMapView' component={NativeMapView} title={this.props.searchTerm}  />


      </Scene>
   </Router>
 )
}

}

export default RouterComponent
