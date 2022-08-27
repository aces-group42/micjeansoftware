import { View, Text,ScrollView,Image,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import SectionCard from './SectionCard';
import { useEffect } from 'react';
import { useState } from 'react';



const FeaturedRow = ({title,description}) => {

  const [data,setData]=useState([]);

  useEffect(()=>{
    const getData = async()=>{
      const result = await fetch(`https://micjeanapi.herokuapp.com/category/${(title).toLowerCase()}`,{
        method:"GET"
      })
      const dataFromDB = await result.json()
      setData(dataFromDB)
    }
    getData()
  },[])

  return (
  
    <View style={{padding:10,marginTop:20,marginLeft:0}}>
      <View style={{flexDirection:"row",alignItems:"center",marginBottom:10}}>
        <View style={{flex:1}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>{title}</Text>
            <Text style={{color:"gray",fontWeight:"bold"}}>{description}</Text>
        </View>
        <View style={{padding:5,borderRadius:50,backgroundColor:"#ccc"}}>
          <AntDesign name="arrowright" size={24} color="#F51962" />
        </View>
      </View>
      <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
        return(
          <SectionCard title={item.name} id={item._id} whatYouGet={item.whatYouGet} category={item.category} imgUrl={item.imagePreview} price={item.price}/>
        )
      }}
      />
    </View>
  )
}

export default FeaturedRow