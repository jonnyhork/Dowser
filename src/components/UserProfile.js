import React from 'react'
import {View, Text, Image} from 'react-native'
import style from '../styles'
import { Avatar } from 'react-native-elements'


const UserProfile = () => {

  return (
    <View>
      <View>
        <Avatar
          large
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>
      <View>
        <Text>user name</Text>
      </View>
    </View>
  )

}

export default UserProfile
