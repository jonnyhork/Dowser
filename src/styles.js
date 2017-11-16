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
  headerView: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 50,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height:4 },
    shadowOpacity: 0.2
  },
  searchBar: {
    paddingTop: 20,
  }
})

export default styles
