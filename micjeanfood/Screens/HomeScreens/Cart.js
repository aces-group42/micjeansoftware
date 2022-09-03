import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import allReducers from '../../Reducers'
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from "react-redux"
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { increaseItem,decreaseItem,deleteItem } from '../../Actions';
import Empty from "../../assets/Empty.png"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { FontAwesome5 } from '@expo/vector-icons'; 

const Cart = () => {
  

  const cartItem = useSelector(state=>state.cartReducer)
  const [order,setOrder]=useState([]);
  const navigation = useNavigation()
  const dispatch = useDispatch()

  

  const totalArr= cartItem.map(item=>[item.price,item.amount])
  const itemByAmount=[]
  totalArr.forEach(item=>itemByAmount.push(item[0]*item[1]))
  const total = itemByAmount.reduce((item,total)=>(item+=total),0)
  
  useEffect(()=>{
    const localData=async()=>{
      try {
        const result = await AsyncStorage.getItem("items")
        const data = result.split("·")
        setOrder(data)
      } catch (error) {
        console.log(error.message)
      } 
    }
    localData()
  },[])

  if(order.length!=0){
    return(
      <SafeAreaView>
        <ScrollView>
        <View>
            <TouchableOpacity style={{backgroundColor:"red",padding:10,borderRadius:10,margin:10}}>
              <Text onPress={()=>{
                const deleteLocal = async()=>{
                  try{ 
                      await AsyncStorage.removeItem("items")
                      setOrder([])
                      alert("ORDER CANCELLED")
                  }catch(error){
                    console.log(error)
                  }
                }
                deleteLocal()
              }} style={{color:"white",textAlign:"center",fontSize:18}}>
                CANCEL ORDER
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingBottom:80}}>
            {order.map((item,index)=>{
              return(
                <View style={{margin:10,borderRadius:10}} key={index}>
                  <Image style={{width:"100%",height:200,borderRadius:10}} source={{
                    uri:item.imagePreview
                  }}/>
                  <View style={{fontSize:18,flexDirection:"row"}}>
                    <Text style={{flex:1}}>
                    {item.name} 
                    </Text>
                    <Text style={{fontWeight:"bold"}}>
                      x {item.amount}
                    </Text>
                  </View>
                  
                </View>
              )
            })}
          </View>
          <View style={{marginTop:10,marginHorizontal:50,paddingBottom:100}}>
                    <TouchableOpacity style={{backgroundColor:"green",padding:10,flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:10}}>
                      <Text style={{color:"white",fontSize:18}}> PAYMENT OPTIONS </Text>
                      <FontAwesome5 name="money-check-alt" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  else if(!cartItem.length){
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
        <View style={{margin:15}}>
          <TouchableOpacity onPress={()=>{
            const saveData=async()=>{
              try{
                await AsyncStorage.clear()
                let obs = ""
                setOrder(cartItem)
                cartItem.forEach(item=>{
                  obs+=JSON.stringify(item)+"·"
                })
                await AsyncStorage.setItem("items",obs)
                alert("Added")
              }catch(error){
                alert(error.message)
              }
            }
            saveData()
          }} style={{backgroundColor:"#0275d8",padding:15,borderRadius:10}}>
            <Text style={{textAlign:"center",color:"white",fontSize:20,fontWeight:"bold"}}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
        {  
          cartItem.map((item,index)=>{
          return(
            <View key={index} style={{margin:15}}>
              <View style={{borderRadius:10,position:"relative"}}>
                <Image source={{uri:item.imagePreview}} style={{width:"100%",height:200,borderRadius:10}}/>
                <TouchableOpacity onPress={()=>{
                  dispatch(deleteItem(item))
                }} style={{backgroundColor:"white",borderRadius:50,paddingHorizontal:10,position:"absolute",top:10,left:10,padding:5}}>
                <FontAwesome name="trash" size={24} color="red" style={{opacity:0.5}} />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:"row",paddingVertical:4}}>
                <View style={{flex:1}}>
                  <Text style={{fontWeight:"bold",fontSize:16}}>{item.name}</Text>
                  <Text style={{color:"gray"}}>GH₵ {(item.price).toFixed(2)}</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                   <TouchableOpacity onPress={()=>{
                    dispatch(increaseItem(item))
                   }} style={{padding:5}}>
                   <AntDesign name="pluscircle" size={29} color="gray" />
                   </TouchableOpacity>
                   <Text style={{fontSize:18}}>{item.amount}</Text>
                   <TouchableOpacity onPress={()=>{
                    dispatch(decreaseItem(item))
                   }} style={{padding:5}}>
                   <AntDesign name="minuscircle" size={29} color="gray" />
                   </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        })
      }
      <View  style={{paddingBottom:80}}>
        <View style={{margin:15,alignItems:"center",backgroundColor:"white",padding:10,borderRadius:10,flexDirection:"row"}}>
          <Text style={{flex:1}}>TOTAL</Text>
          <Text style={{fontSize:20,fontWeight:"bold"}}>GH₵ {(total).toFixed(2)}</Text>
        </View>
        <View style={{margin:15}}>
          
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cart