import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const SectionCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_desc,
    dishes,
    long,
    lat
}) => {
  return (
    <TouchableOpacity style={{backgroundColor:"white",marginRight:10,borderRadius:10,overflow:"hidden"}}>
            <Image source={{
                uri:imgUrl
            }} style={{width:200,height:150}}/>
            <View style={{padding:5}}>
                <Text style={{fontWeight:"bold",paddingBottom:4}}>{title}</Text>
                <View style={{flexDirection:"row",alignItems:"center",paddingBottom:5}}>
                    <Text style={{color:"gray"}}>GH₵ 98.00</Text>
                </View>
            </View>
        </TouchableOpacity>
  )
}

export default SectionCard