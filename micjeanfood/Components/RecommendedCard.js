import { View,Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RecommendedCard = ({imgUrl,title}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("ReviewDetails",{imgUrl,title,price:20})
    }} style={{marginRight:10,position:"relative"}}>
        <Image source={{
            uri:imgUrl
        }} style={{
            width:100,
            height:100,
            borderRadius:15
        }}/>
        
        <View
         style={{position:"absolute"
         ,bottom:5,left:5,backgroundColor:"#F5044F",borderRadius:10,padding:3}}>
          <Text style={{color:"white",fontSize:11}}>{title}</Text>
          </View>
    </TouchableOpacity>
  )
}

export default RecommendedCard