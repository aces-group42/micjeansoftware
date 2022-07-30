import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
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
                    <AntDesign name="star" size={20} color="##F5044F" style={{paddingRight:7,opacity:0.4}}/>
                    <Text style={{color:"#00ccbb"}}>{rating} <Text style={{color:"gray"}}>Offers</Text></Text>
                </View>
                
            </View>
        </TouchableOpacity>
  )
}

export default SectionCard