import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import LoginView from './views/LoginView'
import UserView from './views/UserView'

const RouterComponent = () => {

 return (
   <Router>
     <Scene key="root">
           <Scene key="LoginView" component={LoginView} initial/>
      </Scene>
   </Router>
 )

}

export default RouterComponent
