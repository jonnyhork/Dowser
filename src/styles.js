import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302B2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInView: {
    flex: 1,
    backgroundColor: '#302B2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    padding: 20,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 50,
    color: '#C46D3B',
  },
  taglineText: {
    color: '#ECEFD8'
  },
  userViewContainer: {
    flex: 1,
    backgroundColor: '#302B2F'
  },
  userProfile: {
    paddingTop: 20,
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 25,
    color: '#C46D3B'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height:4 },
    shadowOpacity: 0.2
  },
  searchBar: {
    paddingTop: 20,
  },
  buttonView: {
    margin:50,
  }
})

export default styles
