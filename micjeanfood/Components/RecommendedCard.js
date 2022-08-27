import { View,Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RecommendedCard = ({imgUrl,title}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={{padding:7,borderRadius:10,width:150,height:100,flexDirection:"row",backgroundColor:"white",marginRight:15}}>
      <View style={{flex:4,margin:1,borderRadius:10}}>
        <Image source={{uri:imgUrl}} style={{width:"100%",height:"100%",borderRadius:10}}
        />
      </View>
      <View style={{flex:2,margin:1}}>
          <Text>{title}</Text>
      </View>
  
    </TouchableOpacity>
  )
}

export default RecommendedCard