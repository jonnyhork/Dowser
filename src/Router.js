import React from 'react'
import {Scene, Router} from 'react-native-router-flux'

// VIEWS //
import LoginView from './views/LoginView'
import UserView from './views/UserView'

const RouterComponent = () => {

 return (
   <Router>
     <Scene key="root" hideNavBar>

       <Scene key="auth">
         <Scene key="LoginView" component={LoginView} hideNavBar initial/>
       </Scene>

       <Scene key="main">
         <Scene key='UserView' component={UserView} title='UserView'/>
       </Scene>

      </Scene>
   </Router>
 )

}

export default RouterComponent
