import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const SectionCard = ({
    imgUrl,
    title,
    category,
    price,
    whatYouGet
}) => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=>{
        navigation.navigate("ReviewDetails",{title,imgUrl,category,price,whatYouGet})
    }} style={{width:200 ,backgroundColor:"white",marginRight:10,borderRadius:10,overflow:"hidden"}}>
            <Image source={{
                uri:imgUrl
            }} style={{width:200,height:150}} resizeMode="cover"/>
            <View style={{padding:5}}>
                <Text style={{fontWeight:"bold",paddingBottom:4}}>{title}</Text>
                <View style={{flexDirection:"row",alignItems:"center",paddingBottom:5}}>
                    <Text style={{color:"gray"}}>GH₵ {(price).toFixed(2)}</Text>
                </View>
            </View>
            
        </TouchableOpacity>
  )
}

export default SectionCard