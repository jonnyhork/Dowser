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
    fontSize: 30,
    color: 'rgb(255,255,255)',
    paddingTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontFamily: 'Avenir Next'
  },
  venueHeaderView: {
    padding:10,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  venueHeaderText: {
    paddingBottom:10,
    fontSize: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
    color: 'rgba(0,0,0,0.7)',
    fontFamily: 'Avenir Next'
  },
  venueDecriptionText: {
    padding:5,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#000',
    fontFamily: 'Avenir Next'
  },
  venueContactView: {
    width: 450,
    paddingLeft: 15,
    backgroundColor: 'rgba(255,255,255,0)'
  },
  venueContactHeader: {
    fontSize: 24,
    backgroundColor: 'rgba(255,255,255,0)',
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Avenir Next',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2

  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2
  },
  searchBar: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonView: {
    marginTop: 150,
  },
  background: {
    flex: 1,
    position: 'absolute',
    height: 671,
    width: 380
  },
  callOutStyleView: {
    width: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default styles
