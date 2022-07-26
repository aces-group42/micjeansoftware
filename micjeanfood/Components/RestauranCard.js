import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const RestauranCard = ({
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
    <TouchableOpacity style={{backgroundColor:"white",marginRight:10}}>
            <Image source={{
                uri:imgUrl
            }} style={{width:200,height:150}}/>
            <View style={{padding:5}}>
                <Text style={{fontWeight:"bold",paddingBottom:4}}>{title}</Text>
                <View style={{flexDirection:"row",alignItems:"center",paddingBottom:5}}>
                    <AntDesign name="star" size={20} color="#00ccbb" style={{paddingRight:7,opacity:0.4}}/>
                    <Text style={{color:"#00ccbb"}}>{rating} <Text style={{color:"gray"}}>Offers</Text></Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Feather name="map-pin" size={24} color="gray" />
                    <Text style={{color:"gray",paddingLeft:5}}>Nearby · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
  )
}

export default RestauranCard