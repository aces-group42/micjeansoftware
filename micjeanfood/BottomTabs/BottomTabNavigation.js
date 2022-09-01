import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from '../Screens/HomeScreens/HomeStackNavigation';
import Search from '../Screens/HomeScreens/Search';
import Cart from '../Screens/HomeScreens/Cart';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';  
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const Tabs = createBottomTabNavigator()

const BottomTabNavigation = ({basketQuantity,setBasketQuantity}) => {
  return (
    <Tabs.Navigator screenOptions={{
        // Color for the active TabBar
        tabBarActiveTintColor:"#F5044F",
        // Color for the inactive Tab bar
        tabBarInactiveTintColor:"gray",
        // Hide it when keyboard is opened
        tabBarHideOnKeyboard:true,
        // 
        tabBarStyle:{
            position:"absolute",
            left:30,
            right:30,
            bottom:20,
            borderRadius:20,
            paddingBottom:10,
            paddingTop:10,
            height:60,
            // elevation:0,
            // borderWidth:10
        }
    }}>
        <Tabs.Screen name="HomeTab" options={{
            headerShown:false,
            title:"HOME",
            tabBarIcon:({focused,color,size})=><FontAwesome5 name="home" size={20} color={color} />
        }} children={() => <HomeStackNavigation setBasketQuantity={setBasketQuantity} />}/>
        <Tabs.Screen name="Search" component={Search} options={{
            headerShown:false,
            title:"Search",
            tabBarIcon:({focused,color,size})=><Feather name="search" size={24} color={color} />
        }}/>
        <Tabs.Screen name="Cart" component={Cart} options={{
            headerShown:false,
            title:"BASKET",
            tabBarBadge:basketQuantity,
            tabBarIcon:({focused,color,size})=><FontAwesome name="shopping-basket" size={24} color={color} />
        }}/>
    </Tabs.Navigator>
  )
}

export default BottomTabNavigation