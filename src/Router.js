import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginPage from './components/LoginPage'

const RouterComponent = () => {

 return (
   <Router>
     <Scene key="LoginPage" component={LoginPage} title="Please Login"/>
   </Router>
 )

}



export default RouterComponent
