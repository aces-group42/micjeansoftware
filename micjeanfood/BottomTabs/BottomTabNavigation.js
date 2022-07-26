import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from '../Screens/HomeScreens/HomeStackNavigation';
import Profile from '../Screens/HomeScreens/Profile';
import Cart from '../Screens/HomeScreens/Cart';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
<MaterialCommunityIcons name="truck-delivery" size={24} color="black" />

const Tabs = createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={{
        // Color for the active TabBar
        tabBarActiveTintColor:"#00ccbb",
        // Color for the inactive Tab bar
        tabBarInactiveTintColor:"gray",
        // Hide it when keyboard is opened
        tabBarHideOnKeyboard:true,
        // 
        tabBarStyle:{
            position:"absolute",
            left:20,
            right:20,
            bottom:20,
            borderRadius:20,
            paddingBottom:10,
            paddingTop:10,
            height:60,
            // elevation:0,
            // borderWidth:10
        }
    }}>
        <Tabs.Screen name="HomeTab" component={HomeStackNavigation} options={{
            headerShown:false,
            title:"HOME",
            tabBarIcon:({focused,color,size})=><FontAwesome5 name="home" size={20} color={color} />
        }}/>
        <Tabs.Screen name="Profile" component={Profile} options={{
            headerShown:false,
            title:"TRACK DELIVERY",
            tabBarIcon:({focused,color,size})=><MaterialCommunityIcons name="truck-delivery" size={25} color={color} />
        }}/>
        <Tabs.Screen name="Cart" component={Cart} options={{
            headerShown:false,
            title:"BASKET",
            tabBarBadge:39,
            tabBarIcon:({focused,color,size})=><AntDesign name="shoppingcart" size={25} color={color} />
        }}/>
    </Tabs.Navigator>
  )
}

export default BottomTabNavigation