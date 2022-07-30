import { View, Text,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import SectionCard from './SectionCard';



const FeaturedRow = ({title,description,featuredCategory}) => {
  return (
    <View style={{padding:10}}>
      <View style={{flexDirection:"row",alignItems:"center",marginBottom:10}}>
        <View style={{flex:1}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>{title}</Text>
            <Text style={{color:"gray",fontWeight:"bold"}}>{description}</Text>
        </View>
        <AntDesign name="arrowright" size={24} color="#F51962" />
      </View>
      {/* Image Card */}
      <ScrollView horizontal contentContainerStyle={{
        paddingRight:15
      }} showsHorizontalScrollIndicator={false}>
        <SectionCard
        id={1}
        imgUrl={"https://simply-delicious-food.com/wp-content/uploads/2019/07/Pancake-board-2.jpg"}
        title={"Bread with Fried Egg"}
        rating={4.8}
        genre={"Japanese"}
        address={"Kumasi"}
        short_desc={"This is a short description"}
        dishes={[]}
        long={0}
        lat={0}
        />
        <SectionCard
        id={1}
        imgUrl={"https://www.eatwell101.com/wp-content/uploads/2018/03/Chicken-Pasta-and-Broccoli-Skillet.jpg"}
        title={"Hot Spaghetti"}
        rating={4.8}
        genre={"Japanese"}
        address={"Kumasi"}
        short_desc={"This is a short description"}
        dishes={[]}
        long={0}
        lat={0}
        />
        <SectionCard
        id={1}
        imgUrl={"https://www.eatwell101.com/wp-content/uploads/2018/03/Chicken-Pasta-and-Broccoli-Skillet.jpg"}
        title={"Yo! Sushi"}
        rating={4.8}
        genre={"Japanese"}
        address={"Kumasi"}
        short_desc={"This is a short description"}
        dishes={[]}
        long={0}
        lat={0}
        />
        <SectionCard
        id={1}
        imgUrl={"https://www.eatwell101.com/wp-content/uploads/2018/03/Chicken-Pasta-and-Broccoli-Skillet.jpg"}
        title={"Yo! Sushi"}
        rating={4.8}
        genre={"Japanese"}
        address={"Kumasi"}
        short_desc={"This is a short description"}
        dishes={[]}
        long={0}
        lat={0}
        />
        
      </ScrollView>
    </View>
  )
}

export default FeaturedRow