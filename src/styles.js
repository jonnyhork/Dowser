import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#406C7A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInView: {
    flex: 1,
    backgroundColor: '#406C7A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    padding: 20,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 50,
    color: 'rgb(255,255,255)',
    // fontFamily: 'Quicksand-Light'
  },
  taglineText: {
    color: 'rgb(255,255,255)'
  },
  userViewContainer: {
    flex: 1,
    backgroundColor: '#406C7A'
  },
  userProfile: {
    paddingTop: 80,
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 25,
    color: 'rgb(255,255,255)',
    paddingTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height:4 },
    shadowOpacity: 0.2
  },
  searchBar: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonView: {
    marginTop: 150,
  }
})

export default styles
