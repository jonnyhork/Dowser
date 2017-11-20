import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
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
          value={this.state.searchTerm}
          round
          onChangeText={ text => this.onSearchInputChange(text)}
          placeholder='coffee, music, art...' />
        <Button
          raised
          icon={{name: 'search'}}
          title='Search'
          onPress= { () => this.submitSearch() } />
      </View>
    )
  }

}

export default Search_Bar
