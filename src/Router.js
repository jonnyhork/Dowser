import React from 'react'
import {Scene, Router, Stack} from 'react-native-router-flux'

// VIEWS //
import LoginView from './views/LoginView'
import UserView from './views/UserView'

const RouterComponent = () => {

 return (
   <Router>
     <Scene key="root">
           <Scene key="LoginView" component={LoginView} hideNavBar initial/>
           <Scene key='UserView' component={UserView} title='UserView'/>
      </Scene>
   </Router>
 )

}

export default RouterComponent
