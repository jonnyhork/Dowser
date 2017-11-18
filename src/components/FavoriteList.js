import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import style from '../styles'
import { List, ListItem } from 'react-native-elements'
import FavoriteItem from './FavoriteItem'


const favorites = [
  {
    name: "Scarr's Pizza",
    avatar_url: 'https://igx.4sqi.net/img/general/173774_KwI1uQ6cp_ayifvMYJs8GDdSK-zlHbcBLDy7hEQ-KH0.jpg',
    subtitle: 'Pizza'
  },
  {
    name: "Scarr's Pizza",
    avatar_url: 'https://igx.4sqi.net/img/general/173774_KwI1uQ6cp_ayifvMYJs8GDdSK-zlHbcBLDy7hEQ-KH0.jpg',
    subtitle: 'Pizza'
  },
  {
    name: "Scarr's Pizza",
    avatar_url: 'https://igx.4sqi.net/img/general/173774_KwI1uQ6cp_ayifvMYJs8GDdSK-zlHbcBLDy7hEQ-KH0.jpg',
    subtitle: 'Pizza'
  },
  {
    name: 'Box Car',
    avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
    subtitle: 'Coffee'
  },
  {
    name: 'Box Car',
    avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
    subtitle: 'Coffee'
  },
  {
    name: 'Box Car',
    avatar_url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_.png',
    subtitle: 'Coffee'
  }
]

class FavoriteList extends Component {

  componentDidMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
      // this is where you sate the data that the list will render from, pass the props here
      this.dataSource = ds.cloneWithRows(favorites)

  }
  // ListItem is the each individual item form the total list of favorites, passed as a prop to FavoriteItem
  renderRow(venue) {
    return <FavoriteItem venue={venue} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }

}


export default FavoriteList


// <View>
//   <List containerStyle={{marginBottom: 20}}>
//     {
//       list.map((l, i) => (
//         <ListItem
//           roundAvatar
//           avatar={{uri:l.avatar_url}}
//           key={i}
//           title={l.name}
//         />
//       ))
//     }
//   </List>
// </View>
