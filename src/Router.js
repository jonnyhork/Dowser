import React from 'react'
import {Scene, Router, Stack} from 'react-native-router-flux'
import LoginView from './views/LoginView'
import UserView from './views/UserView'

const RouterComponent = () => {

 return (
   <Router>
     <Stack key="root">
           <Scene key="LoginView" component={LoginView} initial/>
           
      </Stack>
   </Router>
 )

}

export default RouterComponent
