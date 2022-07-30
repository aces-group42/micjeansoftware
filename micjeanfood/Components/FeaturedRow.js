import { View, Text,ScrollView,Image,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import SectionCard from './SectionCard';



const FeaturedRow = ({title,description,data}) => {

  return (
  
    <View style={{padding:10}}>
      <View style={{flexDirection:"row",alignItems:"center",marginBottom:10}}>
        <View style={{flex:1}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>{title}</Text>
            <Text style={{color:"gray",fontWeight:"bold"}}>{description}</Text>
        </View>
        <AntDesign name="arrowright" size={24} color="#F51962" />
      </View>
      <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
        return(
          <SectionCard title={item.name} whatYouGet={item.whatYouGet} category={item.category} imgUrl={item.imageLink} price={item.price}/>
        )
      }}
      />
    </View>
  )
}

export default FeaturedRow