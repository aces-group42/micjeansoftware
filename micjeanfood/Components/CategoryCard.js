import { View,Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title,navigation}) => {
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("ReviewDetails")
    }}  style={{marginRight:10,position:"relative"}}>
        <Image source={{
            uri:imgUrl
        }} style={{
            width:100,
            height:100,
            borderRadius:15
        }}/>
        <Text
         style={{position:"relative",
         fontWeight:"bold",color:"white",bottom:20}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard