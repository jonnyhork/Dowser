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
    // console.log("Search term is:", this.state.searchTerm)
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
          value={this.state.searchTerm}
          round
          lightTheme={true}
          onChangeText={ text => this.onSearchInputChange(text)}
          placeholder='ex. coffee...' />
        <Button
          buttonStyle={styles.searchButton}
          borderRadius={15}
          backgroundColor={'rgba(124,180,199, 0.5)'}
          title={'search'}
          // icon={{name: 'search'}}
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
  searchButton: {
    padding: 6,
    marginTop: 8,

  }
})

export default Search_Bar
