import React from 'react'
import {View, Text, Image} from 'react-native'
import style from '../styles'
import { Avatar } from 'react-native-elements'


const UserProfile = () => {

  return (
    <View>
      <View style={style.userProfile}>
        <Avatar
          large
          rounded
          source={{uri: "https://lh6.googleusercontent.com/-LRKSIKiP2V8/AAAAAAAAAAI/AAAAAAAALpk/7sOHE2cyZS0/photo.jpg?sz=50"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      <Text style={style.userNameText}>user name</Text>
      </View>
    </View>
  )
}

export default UserProfile
