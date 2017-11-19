import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import style from '../styles'
import { SearchBar } from 'react-native-elements'


class Search_Bar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm:''
    }
  }

  onSearchInputChange(searchTerm) {
    console.log("Search term is:", this.state.searchTerm)
    this.setState({
      searchTerm
    })
    this.props.callFourSquareAPI(searchTerm)
  }

  render() {
    return (
      <View style={style.searchBar}>
        <SearchBar
        value={this.state.searchTerm}
        round
        onChangeText={ text => this.onSearchInputChange(text)}
        placeholder='coffee, music, art...' />
      </View>
    )
  }

}

export default Search_Bar
