import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import allReducers from '../../Reducers'
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from "react-redux"
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { increaseItem,decreaseItem,deleteItem } from '../../Actions';
import Empty from "../../assets/Empty.png"
const Cart = () => {

  const cartItem = useSelector(state=>state.cartReducer)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const totalArr= cartItem.map(item=>[item.price,item.amount])
  const itemByAmount=[]
  totalArr.forEach(item=>itemByAmount.push(item[0]*item[1]))
  const total = itemByAmount.reduce((item,total)=>(item+=total),0)


  useEffect(()=>{
    console.log(cartItem.length)
  },[])

  if(!cartItem.length){
    return(
      <View style={{backgroundColor:"white"}}>
        <Image resizeMode='contain' style={{width:"100%",height:"100%"}} 
        source={Empty}
        />
      </View>
    )
  }



  return (
    <SafeAreaView >
      <ScrollView >
        {  
          cartItem.map((item,index)=>{
          return(
            <View key={index} style={{margin:15}}>
              <View style={{borderRadius:10,position:"relative"}}>
                <Image source={{uri:item.imagePreview}} style={{width:"100%",height:200,borderRadius:10}}/>
                <TouchableOpacity onPress={()=>{
                  dispatch(deleteItem(item))
                }} style={{backgroundColor:"white",borderRadius:50,paddingHorizontal:10,position:"absolute",top:10,left:10,padding:5}}>
                <FontAwesome name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:"row",paddingVertical:4}}>
                <View style={{flex:1}}>
                  <Text style={{fontWeight:"bold",fontSize:16}}>{item.name}</Text>
                  <Text>GH₵ {(item.price).toFixed(2)}</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                   <TouchableOpacity onPress={()=>{
                    dispatch(increaseItem(item))
                   }} style={{padding:5}}>
                   <AntDesign name="pluscircle" size={29} color="green" />
                   </TouchableOpacity>
                   <Text style={{fontSize:18}}>{item.amount}</Text>
                   <TouchableOpacity onPress={()=>{
                    dispatch(decreaseItem(item))
                   }} style={{padding:5}}>
                   <AntDesign name="minuscircle" size={29} color="red" />
                   </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        })
      }
      <View  style={{paddingBottom:80}}>
        <View style={{margin:15,alignItems:"center",backgroundColor:"white",padding:10,borderWidth:2,borderColor:"red",borderRadius:10,flexDirection:"row"}}>
          <Text style={{flex:1}}>TOTAL</Text>
          <Text style={{fontSize:20,fontWeight:"bold"}}>GH₵ {(total).toFixed(2)}</Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cart