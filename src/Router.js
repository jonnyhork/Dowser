import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import LoginPage from './views/LoginView'
import UserView from './views/UserView'

const RouterComponent = () => {

 return (
   <Router>
     <Scene key="root">
       <Scene key="LoginPage" component={LoginView} title="Please login" initial/>
       <Scene key="UserView" component={UserView} title="Welcome" />
     </Scene>
   </Router>
 )

}



export default RouterComponent
