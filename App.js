import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import style from './src/styles'
import { Button } from 'react-native-elements'

// COMPONENTS //

import Header from './src/components/Header'
import SearchBar from './src/components/SearchBar'
import FavoriteList from './src/components/FavoriteList'

export default class App extends Component {
    render() {
      return (
        <View style={style.logInView} >
          <SearchBar />
            <Header />
            <Button
              large
              icon={{name: 'google', type: 'font-awesome'}}
              title='Log in with google'
              style={style.shadow}
              backgroundColor='rgba(71, 15, 237, 0.64)'
              borderRadius={20}
              />

        </View>
      )

  }
}
