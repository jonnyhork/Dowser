import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import LoginView from './views/LoginView'
import UserView from './views/UserView'

const RouterComponent = () => {

 return (
   <Router sceneStyle={{padding: 20}}>
     <Scene key="root">
       <Scene key="LoginView" component={LoginView} title="Please login" initial/>
       <Scene key="UserView" component={UserView} title="Welcome" />
     </Scene>
   </Router>
 )

}



export default RouterComponent
