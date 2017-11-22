import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import style from '../styles'
import { SearchBar, Button } from 'react-native-elements'

class Search_Bar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
  onSearchInputChange(searchTerm) {
    this.setState({
      searchTerm
    })
  }
  submitSearch() {
    this.props.callFourSquareAPI(this.state.searchTerm)
  }

  render() {
    return (
      <View style={style.searchBar}>
        <SearchBar
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInput}
          value={this.state.searchTerm}
          round
          lightTheme={true}
          onChangeText={ text => this.onSearchInputChange(text)}
          placeholder='coffee...' />
        <Button
          buttonStyle={styles.searchButton}
          borderRadius={15}
          backgroundColor={'rgba(117,206,182,0.8)'}
          title={'search'}
          onPress= { () => this.submitSearch() } />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: 200
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  searchButton: {
    padding: 5,
    marginTop: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height:2 },
    shadowOpacity: 0.2
  }
})

export default Search_Bar
