import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  logInView: {
    flex: 1,
    backgroundColor: '#4c93aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#4c93aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    flex:1,
    padding: 20,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 50,
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
    flex:1
  }
})

export default styles
